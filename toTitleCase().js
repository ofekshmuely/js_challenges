

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
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond")); 
console.log(toTitleCase("ganan gidel dagan bagan, dagan gadol gadal bagan"));