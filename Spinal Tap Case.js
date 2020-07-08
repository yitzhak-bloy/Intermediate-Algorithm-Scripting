/*
Intermediate Algorithm Scripting: Spinal Tap Case.
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

const spinalCase = (str) => {
  let string = str.replace(/\b \b|_/g, '-');
  string = [...string];

  for (let i = 0; i < string.length; i++) {
    if (/[A-Z]/.test(string[i]) && string[i-1] !== '-' && string[i-1]) {
      string.splice(i, 1, "-" + string[i])
    };
  };

  return string.join('').toLowerCase();
}

spinalCase('thisIsSpinalTap');