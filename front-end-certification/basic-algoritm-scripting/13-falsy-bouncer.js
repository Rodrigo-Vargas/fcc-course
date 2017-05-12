/*
  url: https://www.freecodecamp.com/challenges/falsy-bouncer
  name: Falsy Bouncer
  description:  Remove all falsy values from an array.
                Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  return arr.filter(function(val){
    if (val) 
      return val;
    else
      return false;
  });
}

bouncer([7, "ate", "", false, 9]);
