/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/ 

function capitalizeWord(word){
    const firstUpperLetter = word.slice(0,1).toUpperCase()
    const afterUpper = word.slice(1)
    return firstUpperLetter+afterUpper
}

function toTitleCase(str){
    let myWords = str.split(' ');
    let endWord = []
    myWords.forEach(word=>{
        endWord.push(capitalizeWord(word))
    })
    return endWord.join(' ')
}

// Test your functions
console.log(capitalizeWord("pumpkin"));//Pumpkin
console.log(toTitleCase("pumpkin pranced purposefully across the pond")); //Pumpkin Pranced Purposefully Across The Pond 
console.log(toTitleCase("ganan gidel dagan bagan, dagan gadol gadal bagan")); //Ganan Gidel Dagan Bagan, Dagan Gadol Gadal Bagan
