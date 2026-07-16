// strings indexing and some methods like trim 

let myName = '  Nouman  ';

myName.trim();
console.log(myName.length);

console.log(myName);
myName = myName.trim();
console.log(myName.length);
console.log(myName);

console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

// slicing 

let newString = myName.slice(0, myName.length-1);
console.log(newString);

// console.log(myName[myName.length-1]);