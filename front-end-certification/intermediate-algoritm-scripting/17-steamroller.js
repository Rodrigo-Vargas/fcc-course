/*
  url: https://www.freecodecamp.com/challenges/steamroller
  name: Steamroller
  description:  Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr)
{
  var allElementsAreNotArray = false;
  
  while (!allElementsAreNotArray)
  {
    for (var x = 0; x < arr.length; x++)
    {
      if (Array.isArray(arr[x]))
      {
        if (arr[x].length == 1)
        {
          arr[x] = arr[x][0];
        }
        else
        {
          var element = arr.pop(x);
          for (var y = 0; y < element.length; y++)
          {
            arr.splice(x + y, 0, element[y]);
          }
        }
      }
    }
    
    allElementsAreNotArray = true;
    
    for (x = 0; x < arr.length; x++)
    {
      if (Array.isArray(arr[x]))
        allElementsAreNotArray = false;
    }
  }
  
  return arr;
  
}

steamrollArray([1, [2], [3, [[4]]]]);
