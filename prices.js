//Ice ($4.20) => $4.20
function getPrice(item) {
 return item.slice( item.indexOf('$'),-1)
}


/*
tests:
getPrice('Ice ($4.20)') ---> '$4.20'
getPrice('Potatoe salad ($6.50)') ---> '$6.50'
*/
