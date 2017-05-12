/*
  url: https://www.freecodecamp.com/challenges/caesars-cipher
  name: Caesars Cipher
  description:  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
                A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
                Write a function which takes a ROT13 encoded string as input and returns a decoded string.
                All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { // LBH QVQ VG!
  var strArray = str.split('');
  var decodedString = "";
  
  for (var i = 0; i < str.length; i++){
    var encondedCipherCode = str.charCodeAt(i);
    var decodedChipherCode = 0;

    if (encondedCipherCode >= 65)
    {        
      decodedChipherCode = encondedCipherCode - 13;
      
      if (decodedChipherCode < 65)
        decodedChipherCode = 91 - (65 - decodedChipherCode);   
    }
    else
    {
      decodedChipherCode = encondedCipherCode;
    }      
    decodedString += String.fromCharCode(decodedChipherCode);
  }
  
  return decodedString;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
