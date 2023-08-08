
/*
Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

*/

const demoObj = {spartan:true,profession:'HUH HUH HUH!',swords:5,eyes:1}

const toArray = (myObj) => {
  const myArr = []

  for (item in myObj) {
    myArr.push([item, myObj[item]])
  }

  return [myArr]
}


console.log(toArray(demoObj))
