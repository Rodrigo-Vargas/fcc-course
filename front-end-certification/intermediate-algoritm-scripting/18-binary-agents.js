/*
  url: https://www.freecodecamp.com/challenges/binary-agents
  name: Binary Agents
  description:  Return an English translated sentence of the passed binary string.
                The binary string will be space separated.
*/

function binaryToDecimal(binary)
{
  var binaryArray = binary.split('');
  
  var level = 1;
  
  for (var x = binaryArray.length - 1; x >= 0; x--)
  {
    binaryArray[x] = parseInt(binaryArray[x]) * level;
    level = level * 2;
  }
  
  var sum = 0;
  
  for (x = 0; x< binaryArray.length; x++)
  {
    sum += binaryArray[x];    
  }
  
  return sum;
}

function binaryAgent(str) {
  var arrPhrase = str.split(" ");
  
  for (var x = 0; x < arrPhrase.length; x++)
  {
    arrPhrase[x] = String.fromCharCode(binaryToDecimal(arrPhrase[x]));
  }
  
  return arrPhrase.join("");
}


binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");