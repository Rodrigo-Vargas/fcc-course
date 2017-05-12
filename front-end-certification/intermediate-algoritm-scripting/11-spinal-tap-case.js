/*
  url: https://www.freecodecamp.com/challenges/spinal-tap-case
  name: Spinal Tap Case
  description:  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  
  var match = str.match(/[A-Z]/g);
  
  match.forEach(function(matchLetter){
    if (str.indexOf(matchLetter) > 0)
      str = str.replace(matchLetter, " " + matchLetter.toLowerCase());
  });
  
  return str.replace(/[\s_]+/g, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
