/*
  url: https://www.freecodecamp.com/challenges/mutations
  name: Mutations
  description:  Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
                For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
                The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
                Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
  for(var i = 0; i < arr[1].length; i++)
  {
    var containsLetter = false;
    for (var z = 0; z < arr[0].length; z++)
    {
      if (arr[1].toLowerCase().charAt(i) == arr[0].toLowerCase().charAt(z))
      {
        containsLetter = true;
      }
      
    }
    if (!containsLetter) return false;

  }
  return true;
}

mutation(["hello", "hey"]);
