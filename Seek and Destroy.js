/*
Intermediate Algorithm Scripting: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

const destroyer = (...arr) =>{
  let initialArr = arr.shift();

  for (let i = 0; i < initialArr.length; i++) {
    for (let x = 0; x < arr.length; x++) {
      if (initialArr[i] === arr[x]) {
        delete initialArr[i]
      }
    }
  }

  return initialArr.filter(Boolean)
}
  
destroyer(([1, 2, 3, 5, 1, 2, 3], 2, 3))