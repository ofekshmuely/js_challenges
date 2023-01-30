function longestWord(words) {
 const myArr = words.sort((a,b)=> a.length-b.length)
 return words.at(-1).length === words.at(-2).length ? 'Foobar' : words.at(-1)
} 

/*
tests:
longestWord(['Welcome','to','JSCodebox']) ---> 'JSCodebox'
longestWord(['You','are','very','beautiful']) ---> 'beautiful'
longestWord(['This','is','a','test']) ---> 'Foobar'
*/
