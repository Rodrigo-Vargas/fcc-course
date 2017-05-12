/*
  url: https://www.freecodecamp.com/challenges/chunky-monkey
  name: Chunky Monkey
  description:  Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  var newArray = [];
  var auxArray = [];
  for (var i = 0; i < arr.length; i++)
  {
    if (i % size == 0 && i > 0)
    {
      newArray.push(auxArray);
      auxArray = [];
    }
    auxArray.push(arr[i]);
  }
  
  newArray.push(auxArray);
  
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
