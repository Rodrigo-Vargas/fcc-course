/*
  url: https://www.freecodecamp.com/challenges/slasher-flick
  name: Slasher Flick
  description:  Return the remaining elements of an array after chopping off n elements from the head.
                The head means the beginning of the array, or the zeroth index.
*/

function slasher(arr, howMany) {
  for (var i =0; i < howMany; i++)
  {
    arr.shift();
  }
  return arr;
}

slasher([1, 2, 3], 2);
