/*
  url: https://www.freecodecamp.com/challenges/sum-all-primes
  name: Sum All Primes
  description:  Sum all the prime numbers up to and including the provided number.
                A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
                The provided number may not be a prime.
*/

function isPrime(num)
{
  if (num == 1)
    return false;
  
  var isPrime = true;
  for (var x = 1; x < num; x++)
  {
    if (num % x === 0 && x != 1)
      isPrime = false;
  }
  
  return isPrime;
}

function sumPrimes(num) {
  var sum = 0;
  for (var x = 1; x <= num; x++)
  {
    if (isPrime(x))
    {
      sum += x;
      console.log(x);
    }
  }  
  
  return sum;
}

sumPrimes(8);
