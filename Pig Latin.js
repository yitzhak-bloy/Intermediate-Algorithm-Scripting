/*
Intermediate Algorithm Scripting: Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster,
  move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

const translatePigLatin = (str) => {
  let strAsArr = [...str];
  let arrOfConsonants = [];
  let result;

  if (str[0] === 'o' || str[0] === 'i' || str[0] === 'e' || str[0] === 'a' || str[0] === 'u') {
     result = str + 'way'
  } else {
    for (let i = 0; i < str.length; i++) {
      if(str[i] !== 'o' && str[i] !== 'i' && str[i] !== 'e' && str[i] !== 'a' && str[i] !== 'u') {
        arrOfConsonants.push(strAsArr.splice(0,1))
      } else {
        break;
      }
    }
    result = strAsArr.join('') + arrOfConsonants.flat().join('') + 'ay'
  }
  
  return result
}
  
translatePigLatin('california');  