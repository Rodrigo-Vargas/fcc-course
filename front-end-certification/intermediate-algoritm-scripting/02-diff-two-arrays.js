/*
  url: https://www.freecodecamp.com/challenges/diff-two-arrays
  name: Diff Two Arrays 
  description:  Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
                In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  
  arr1.forEach(function(entry){
    var containsInBothArrays = false;
    arr2.forEach(function(entry2){
      if (entry == entry2)
        containsInBothArrays = true;
    });
    if (!containsInBothArrays)
      newArr.push(entry);    
  });
  
  arr2.forEach(function(entry2){
    var containsInBothArrays = false;
    arr1.forEach(function(entry){
      if (entry == entry2)
        containsInBothArrays = true;
    });
    
    if (!containsInBothArrays)
      newArr.push(entry2);    
  });
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
