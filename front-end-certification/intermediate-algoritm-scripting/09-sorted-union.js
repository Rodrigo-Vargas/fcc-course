/*
  url: https://www.freecodecamp.com/challenges/sorted-union
  name: Sorted Union
  description:  Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
                In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
                The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function uniteUnique(arr1, arr2, arr3) {
  for (var x = 1; x < arguments.length; x++)
  {
    arguments[x].forEach(function(entry){
      if (arr1.indexOf(entry) == -1)
        arr1.push(entry);
    });
  }
  
  return arr1;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
