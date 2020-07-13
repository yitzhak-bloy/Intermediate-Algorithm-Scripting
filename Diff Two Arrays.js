/*
Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given
arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/

const checkIfUnique  = (first, second) => {
  var arrOfUnique = [];

  for (let i = 0; i < first.length; i++) {
    let check = true;

    for (let x = 0; x < second.length; x++) {
      if (first[i] === second[x]) {
        check = false
      }        
    }

    if (check) {
      arrOfUnique.push(first[i])
    }
  }

  return arrOfUnique;
}

const diffArray = (arr1, arr2) => [...checkIfUnique(arr1, arr2),...checkIfUnique(arr2, arr1)];

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);