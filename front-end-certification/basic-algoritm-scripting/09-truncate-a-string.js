/*
  url: https://www.freecodecamp.com/challenges/truncate-a-string
  name: Truncate a string
  description:  Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
                Note that inserting the three dots to the end will add to the string length.
                However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
*/

function truncateString(str, num) {
  
  var truncatedString = str;
  
  if (str.length > num)
  {
    if (num <= 3)
      truncatedString = str.slice(0, num) + "...";
    else
      truncatedString = str.slice(0, num - 3) + "...";
  }
    
  
  return truncatedString;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
