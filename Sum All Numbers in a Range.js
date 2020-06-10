/*
Intermediate Algorithm Scripting: Sum All Numbers in a Range

We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 

The lowest number will not always come first.
*/

const sumAll = (arr) => {
  let solution = 0;

  arr.sort((a, b) => a - b);

  for (let i = arr[0]; i <= arr[1]; i++) {
    solution += i;
  };

  return solution;
}

sumAll([15, 2]);
