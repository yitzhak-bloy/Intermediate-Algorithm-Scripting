const uniteUnique = (...arr) => [].concat(...arr).filter((num, index, arr) =>  arr.indexOf(num) == index)


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);