/*1
Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
*/

const convert = (str) => {
  if (str.indexOf("<") >= 0) {
      return convert(str.replace(/</gi, "&lt;"))
  } else if (str.indexOf(">") > 0) {
      return convert(str.replace(/>/gi, "&gt;"))
  } else if (str.indexOf('"') > 0) {
      return convert(str.replace(/"/gi, "&quot;"))
  } else if (str.indexOf("'") > 0) {
      return convert(str.replace(/'/gi, "&apos;"))
  } else {
    return str
  };
};

const convertHTML = (str) => str.indexOf("&") < 0 ? convert(str) : str.replace(/&/gi, "&amp;");

convertHTML("Dolce & Gabbana");