/*
  url: https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string
  name: Repeat a string repeat a string
  description:  Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  if (num < 0)
    return "";
  var repeatedString = "";
  // repeat after me
  for (var i = 0; i < num; i++){
    repeatedString = repeatedString.concat(str);
  }
  
  return repeatedString;
}

repeatStringNumTimes("abc", 3);