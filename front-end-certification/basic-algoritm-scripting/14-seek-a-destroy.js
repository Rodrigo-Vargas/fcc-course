/*
  url: https://www.freecodecamp.com/challenges/seek-and-destroy
  name: Seek and Destroy
  description:  You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
                Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  var mainArguments = arguments;
  arr = arr.filter(function(val) 
  {
    for (var i = 1; i < mainArguments.length; i++)
    {
      if (val == mainArguments[i])
        return false;
    }

    return true;
  });
  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
