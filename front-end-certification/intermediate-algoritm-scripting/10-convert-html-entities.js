/*
  url: https://www.freecodecamp.com/challenges/convert-html-entities
  name: Convert HTML Entities
  description:  Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convert(str) {
  
  str = str.replace(/[&]/g, "&amp;");
  str = str.replace(/[<]/g, "&lt;");
  str = str.replace(/[>]/g, "&gt;");
  str = str.replace(/["]/g, "&quot;");
  str = str.replace(/[']/g, "&apos;");
  
  return str;
}

convert("Hamburgers < Pizza < Tacos");
