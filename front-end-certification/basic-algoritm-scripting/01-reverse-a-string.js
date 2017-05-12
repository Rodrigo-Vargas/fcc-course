/*
  url: https://www.freecodecamp.com/challenges/reverse-a-string
  name: Reverse a String
  description:  Reverse the provided string.
                You may need to turn the string into an array before you can reverse it.
                Your result must be a string.

*/

function reverseString(str) {
  var arr = str.split('');
  arr = arr.reverse();
  arr = arr.join('');
  return arr;
}

reverseString("hello");
