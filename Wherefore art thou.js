/*
Intermediate Algorithm Scripting: Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array
of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from 
the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", 
last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" },
then you must return the third object from the array (the first argument), because it contains the name 
and its value, that was passed on as the second argument.
*/

const whatIsInAName = (collection, source) => {
  let arr = [];
  const keysSource = Object.keys(source);
  const keysSourceSize = Object.keys(source).length;

  for (let i = 0; i < collection.length; i++) {
    const CollectionSize = Object.keys(collection[i]).length;
    let checkKeys = false;

    for (let x = 0; x < keysSource.length; x++) {
      if (keysSource[x] in collection[i] && keysSourceSize <= CollectionSize) {
        checkKeys = true;
      } else {
        checkKeys = false; break;
      }
    }

    if (checkKeys) {
      let checkValue = false;
      for (let n = 0; n < keysSource.length; n++) {
        if (collection[i][keysSource[n]] === source[keysSource[n]]) {
          checkValue = true;
        } else {
          checkValue = false; break;
        }
      }
      if (checkValue) {
        arr.push(collection[i])
      }
    }
  }

  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });