/*
  url: https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers
  name: Sum All Odd Fibonacci Numbers
  description:  Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
                The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
                For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  var sum = 0;
  var fiboArray = [0, 1];
  
  while (fiboArray[fiboArray.length - 1] < num)
  {
    if (fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2] <= num)
      fiboArray.push(fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2]);
  }  
  
  for (var x = 0; x < fiboArray.length; x++)
  {
    if (fiboArray[x]%2 !== 0)
      sum += fiboArray[x];
  }
  
  return sum;
}

sumFibs(75025);
