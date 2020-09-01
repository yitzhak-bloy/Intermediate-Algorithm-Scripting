/*
Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

const steamrollArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr.splice(i, 1, ...arr[i]);
      steamrollArray(arr);
    };
  };

  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);