/*
Given three arguments ⁠— an object obj of the stolen items,
the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

Examples:
addName({}, "Brutus", 300) ➞ { Brutus: 300 }
addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

*/

//option 1:spread
const addName = (obj,key,val) =>{
return {...obj,key:val}
}

//option 2: object assign

const addName2(obj2, name2, value2) {
  const newObj = Object.assign({}, obj2, { [name2]: value2 });
  return newObj;
}
const obj2 = { piano: 500, stereo: 300 };
addName2(obj2, "Caligula", 440); // { piano: 500, stereo: 300, Caligula: 440 }
