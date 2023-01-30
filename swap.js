function swap(numbers) {
  const swapMiddle = numbers.slice(1,-1)
  return numbers.length <= 2 ?
  numbers.reverse() :
  [numbers.at(-1), swapMiddle, numbers.at(0)];
}

/*
tests
swap([1,5,3,7,2,7,3]) ---> [3,5,3,7,2,7,1]
swap([1,6,2,7,9,3,4]) ---> [4,6,2,7,9,3,1]
swap([1,0]) [0,1] ---> [0,1]
swap([1]) ---> [1]
swap([]) ---> []

*/
