/*
  url: https://www.freecodecamp.com/challenges/search-and-replace
  name: Search and Replace
  description:  Perform a search and replace on the sentence using the arguments provided and return the new sentence.
                First argument is the sentence to perform the search and replace on.
                Second argument is the word that you will be replacing (before).
                Third argument is what you will be replacing the second argument with (after).
                NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
  
  strArray = str.split(" ");
  
  for (var x = 0; x <= strArray.length; x++)
  {
    if (strArray[x] == before)
    {
      if (strArray[x][0] == strArray[x][0].toUpperCase())
      {
        strArray[x] = after.replace(after[0], after[0].toUpperCase());
      }
      else
      {
        strArray[x] = after;
      }
    }
  }
  
  str = strArray.join(" ");
  
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
