/*
  url: https://www.freecodecamp.com/challenges/sum-all-primes
  name: Sum All Primes
  description:  Sum all the prime numbers up to and including the provided number.
                A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
                The provided number may not be a prime.
*/

// noprotect
function buildArrayOfBetweenNumbers(min, max)
{
  var arr = [];
  
  if (min > max)
  {
    var aux = min;
    min = max;
    max = aux;
  }
  
  for (var x = min; x <= max; x++)
  {
    arr.push(x);
  }
  
  return arr;
}

function smallestCommons(arr) {
  var divisibleByAll = false;
  var x = 1;
  
  var allNumbers = buildArrayOfBetweenNumbers(arr[0], arr[1]);
  
  
  while(!divisibleByAll)
  {
    divisibleByAll = true;
    
    allNumbers.forEach(function(number){
      if (x % number !== 0)
      {
        divisibleByAll = false;
      }
    });
    x++;
  }
  
  x--;
  
  return x;
}


smallestCommons([5,1]);
