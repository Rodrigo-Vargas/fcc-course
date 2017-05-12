/*
  url: https://www.freecodecamp.com/challenges/missing-letters
  name: Missing letters
  description:  Find the missing letter in the passed letter range and return it.
                If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  var expectedCode = str.charCodeAt(0);
  
  for(var x = 0; x < str.length; x++)
  {
    if (str.charCodeAt(x) != expectedCode)
    {
      return String.fromCharCode(expectedCode);
    }
    expectedCode++;
  }  
  
  return undefined;
}

fearNotLetter("bcd");
