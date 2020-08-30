/*
Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is 
also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

const smallestCommonsOfTwo = (num1, num2) => num1 * num2 / gcd(num1, num2);

const smallestCommons = (arr) => {
  let arrayOfNumbers = [];

  arr.sort((a, b) => a - b);

  for (let i = arr[0]; i <= arr[1]; i++) {
    arrayOfNumbers.push(i)
  }

  let number = arrayOfNumbers[0];

  for (let i = 1; i < arrayOfNumbers.length; i++) {
    number = smallestCommonsOfTwo(number, arrayOfNumbers[i])
  }

  return number;
}
  
smallestCommons([2,10]);