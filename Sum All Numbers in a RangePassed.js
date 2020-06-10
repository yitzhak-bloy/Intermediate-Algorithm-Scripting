const sumAll = (arr) => {
  let solution = 0;

  arr.sort((a, b) => a - b);

  for (let i = arr[0]; i <= arr[1]; i++) {
    solution += i;
  };

  return solution;
}

sumAll([15, 2]);
