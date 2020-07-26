/*
Intermediate Algorithm Scripting: Missing letters

Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

const x = (letter) => {
  switch (letter) {
    case 'a':
      return 'b'
    case 'b':
      return 'c'
    case 'c':
      return 'd'
    case 'd':
      return 'e'
    case 'e':
      return 'f'
    case 'f':
      return 'g'
    case 'g':
      return 'h'
    case 'h':
      return 'i'
    case 'i':
      return 'j'
    case 'j':
      return 'k'
    case 'k':
      return 'l'
    case 'l':
      return 'm'
    case 'm':
      return 'n'
    case 'n':
      return 'o'
    case 'o':
      return 'p'
    case 'p':
      return 'q'
    case 'q':
      return 'r'
    case 'r':
      return 's'
    case 's':
      return 't'
    case 't':
      return 'u'
    case 'u':
      return 'v'
    case 'v':
      return 'w'
    case 'w':
      return 'x'                                                                                                              
    case 'x':
      return 'y'
    case 'y':
      return 'z'
  };
};

const fearNotLetter = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i+1] !== x(str[i])) {
      return x(str[i])
    };
  };

  return undefined
};

fearNotLetter("abcdefghjklmno");