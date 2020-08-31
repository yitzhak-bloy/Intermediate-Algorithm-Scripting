/*
Intermediate Algorithm Scripting: Drop it

Given the array arr, iterate through and remove each element starting from the first element 
(the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, 
otherwise, arr should be returned as an empty array.
*/

const dropElements = (arr, func) => {
  let solution = [];

  const checksIfTwice = (ind, num) => {
    for (let i = ind; i >= 0; i--) {
      if (arr[i] === num) {
        return true;
      };
    };
    return false;
  };
  
  for (let i = arr.length-1; i >= 0; i--) { 
    if (func(arr[i])) {
      solution.unshift(arr[i]);
    } else if (checksIfTwice(i-1, arr[i])) {
        solution.unshift(arr[i]);
      };
  };

  return solution;
};
  
dropElements([0, 1, 0, 1], function(n) {return n === 1;})  