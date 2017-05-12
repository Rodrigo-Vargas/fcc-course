/*
  url: https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range
  name: Sum All Numbers in a Range 
  description:  We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
                The lowest number will not always come first.
*/

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

function sumAll(arr) {
  var min = getMinOfArray(arr);
  var max = getMaxOfArray(arr);
  var buildedArray = [];
  // Generate array
  for (var x = min; x <= max; x++)
  {
    buildedArray.push(x);
  }
      
  return buildedArray.reduce(function(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
  });
}

sumAll([1, 4]);
