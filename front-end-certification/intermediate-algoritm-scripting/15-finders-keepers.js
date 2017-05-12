/*
  url: https://www.freecodecamp.com/challenges/finders-keepers
  name: Finders Keepers
  description:  Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
*/

function findElement(arr, func) {
  for (var x = 0; x < arr.length; x++) {
    if (func(arr[x]))
      return arr[x];
  }
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
