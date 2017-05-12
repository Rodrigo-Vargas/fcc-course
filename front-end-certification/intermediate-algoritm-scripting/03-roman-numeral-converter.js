/*
  url: https://www.freecodecamp.com/challenges/roman-numeral-converter
  name: Roman Numeral Converter
  description:  Convert the given number into a roman numeral.
                All roman numerals answers should be provided in upper-case.
*/

function getRoman(number, position)
{
  // 2 - Decimal
  // 1 - Unit
  
  var maxSymbol = "";
  var medSymbol = "";
  var minSymbol = "";
  
  
  if (position == 1)
  {
    maxSymbol = "X";
    medSymbol = "V";
    minSymbol = "I";
  }
  
  if (position == 2)
  {
    maxSymbol = "C";
    medSymbol = "L";
    minSymbol = "X";   
  }
  
  if (position == 3)
  {
    maxSymbol = "M";
    medSymbol = "D";
    minSymbol = "C";
  }
  
  if (position == 4)
  {
    maxSymbol = "M";
    medSymbol = "M";
    minSymbol = "M";
  }
  
  if (number == 9)
    return minSymbol + maxSymbol;

  if (number == 8)
    return medSymbol + minSymbol + minSymbol + minSymbol;

  if (number == 7)
    return medSymbol + minSymbol + minSymbol;

  if (number == 6)
    return medSymbol + minSymbol;

  if (number == 5)
    return medSymbol;

  if (number == 4)
    return minSymbol + medSymbol;

  if (number == 3)
    return minSymbol + minSymbol + minSymbol;

  if (number == 2)
    return minSymbol + minSymbol;

  if (number == 1)
    return minSymbol;

  return "";
}

function convertToRoman(num) {
  var romanNumeral = "";
  
  var numArray = ("" + num).split("");
  
  for(var x=0; x < numArray.length; x++)
  {
    romanNumeral = romanNumeral + getRoman(numArray[x], numArray.length - x);
  }
  
  return romanNumeral;
}

convertToRoman(97);
