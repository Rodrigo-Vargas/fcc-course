/*
  url: https://www.freecodecamp.com/challenges/title-case-a-sentence
  name: Title Case a Sentence
  description:  Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
                For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  var array = str.split(" ");
  
  array = array.map(function(val){
    
    var replacedString = val.charAt(0).toUpperCase();
    if (val.length > 1)
      replacedString = replacedString.concat(val.toLowerCase().substr(1, val.length));
        
    return replacedString;
  });
  
  str = array.join(" ");
  
  return str;
}

titleCase("I'm a little tea pot");
