/*
Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

const myReplace = (str, before, after) => {
  let strArr = str.split(' ');
  let afterFinal;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].toUpperCase() === before.toUpperCase()) {
      if (/[A-Z]/.test(strArr[i][0])) {
         afterFinal = after.replace(after[0], after.split('')[0].toUpperCase());
      } else {
         afterFinal = after.replace(after[0], after.split('')[0].toLowerCase());
      }
      strArr[i] = afterFinal;
    };
  };

  return strArr.join(' ');
};
  
myReplace("Let us go to the store", "store", "mall")