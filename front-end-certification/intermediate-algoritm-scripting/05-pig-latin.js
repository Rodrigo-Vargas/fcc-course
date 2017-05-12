/*
  url: https://www.freecodecamp.com/challenges/pig-latin
  name: Pig Latin
  description:  Translate the provided string to pig latin.
                Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
                If a word begins with a vowel you just add "way" to the end.
                Input strings are guaranteed to be English words in all lowercase.
*/

function isVowel(letter)
{
  return ['a', 'e', 'i', 'o', 'u'].indexOf(letter) > -1;
}

function translatePigLatin(str) {
  var strArray = str.split('');
  
  if (!isVowel(strArray[0]))
  {
    var letter = "";
    while (!isVowel(strArray[0]))
    {
        letter = strArray.shift();
        strArray.push(letter);
    }
    
    return strArray.join('') + "ay";
  }
  else
  {
    return strArray.join('') + "way";
  }  
}

translatePigLatin("consonant");
