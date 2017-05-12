/*
  url: https://www.freecodecamp.com/challenges/everything-be-true
  name: Everything Be True
  description:  Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
                Remember, you can access object properties through either dot notation or [] notation
*/

function truthCheck(collection, pre) {
  for (var x = 0; x < collection.length; x++)
  {
    if (!collection[x].hasOwnProperty(pre) || !collection[x][pre])
    {
      return false;
    }
  }
  
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
