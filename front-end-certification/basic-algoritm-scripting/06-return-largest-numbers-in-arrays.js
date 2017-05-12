/*
  url: https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays
  name: Return Largest Numbers in Arrays
  description:  Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
                Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  var arrayOfBiggers  = [];
  for (var i = 0; i < arr.length; i ++){
    var biggerOfSubArray = 0;
    
    for (var y = 0; y < arr[i].length; y++){
      if (arr[i][y] > biggerOfSubArray)
        biggerOfSubArray = arr[i][y];
    }
    arrayOfBiggers.push(biggerOfSubArray);
  }
  
  return arrayOfBiggers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);