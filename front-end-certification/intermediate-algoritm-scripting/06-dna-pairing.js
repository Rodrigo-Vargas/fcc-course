/*
  url: https://www.freecodecamp.com/challenges/dna-pairing
  name: DNA Pairing
  description:  The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
                Base pairs are a pair of AT and CG. Match the missing element to the provided character.
                Return the provided character as the first element in each array.
                For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
                The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  var strArray = str.split("");
  var resultArray = [];
  
  for(var x = 0; x <= strArray.length; x++)
  {
    switch (strArray[x])
    {
      case "G":
      {
        resultArray.push(["G", "C"]);
        break;
      }
      case "C":
      {
        resultArray.push(["C", "G"]);
        break;
      }
      case "A":
      {
        resultArray.push(["A", "T"]);
        break;
      }
      case "T":
      {
        resultArray.push(["T", "A"]);
        break;
      }
    }
    
  } 
  console.log(resultArray);
  return resultArray;  
}

pairElement("GCG");
