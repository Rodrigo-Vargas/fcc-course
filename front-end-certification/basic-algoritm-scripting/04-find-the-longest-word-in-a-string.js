/*
  url: https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string
  name: Find the Longest Word in a String
  description:  Return the length of the longest word in the provided sentence.
                Your response should be a number.
*/

function findLongestWord(str) {
  var bigger = 0;
  var array = str.split(" ");
  
  array.map(function(val){
    if (val.length > bigger)
      bigger = val.length;
    
    return val;
  });
  
  return bigger;
}

findLongestWord("The quick brown fox jumped over the lazy dog");