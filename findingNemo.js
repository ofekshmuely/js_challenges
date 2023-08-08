
/*
You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".

Examples:
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
findNemo("Nemo is me") ➞ "I found Nemo at 1!"
findNemo("I Nemo am") ➞ "I found Nemo at 2!"
*/

const findNemo = (str) => {
  const wordsArr = str.split(' ');
  const index = wordsArr.indexOf('Nemo');
  
  return index !== -1
    ? `I found Nemo at ${index + 1}!`
    : "I can't find Nemo :(";
}

console.log(findNemo("I am finding Nemo !") )
console.log(findNemo("Nemo is me"))
console.log(findNemo("I Nemo am"))
