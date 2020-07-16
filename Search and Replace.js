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

const myReplace = (...args) => {
  let sentenceArr = args[0].split(' ');
  let wordBefore = args[1];
  let wordAfter = args[2];
  let wordAfterFinal;

  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i].toUpperCase() === wordBefore.toUpperCase()) {
      if (/[A-Z]/.test(sentenceArr[i][0])) {
         wordAfterFinal = wordAfter.replace(wordAfter[0], wordAfter.split('')[0].toUpperCase());
      } else {
         wordAfterFinal = wordAfter.replace(wordAfter[0], wordAfter.split('')[0].toLowerCase());
      }
      sentenceArr[i] = wordAfterFinal;
    };
  };

  return sentenceArr.join(' ');
};
  
myReplace("Let us go to the store", "store", "mall")