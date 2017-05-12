/*
  url: https://www.freecodecamp.com/challenges/arguments-optional
  name: Arguments Optional
  description:  Create a function that sums two arguments together. 
                If only one argument is provided, then return a function that expects one argument and returns the sum.
*/

function addTogether() {
  var sum = 0;
  
  if (arguments.length <= 1)
  {
    if (typeof(arguments[0]) != "number")
        return undefined;
    else
    {
      var arg = arguments[0];
      return function sumNumberAnd(x)
      {
        return add(arg, x);
      };
    }    
  }
  else
  {
    for (var x = 0; x < arguments.length; x++)
    {
      if (typeof(arguments[x]) != "number")
        return undefined;
      else
      {
        sum += arguments[x];
      }        
    }
    
    return sum;
  }  
}

addTogether(2)(3);
