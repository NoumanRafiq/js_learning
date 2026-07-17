const fruits = ['apple', 'mango', 'grapes'];

for(let fruit in fruits){
    console.log(fruits[fruit]);
}

console.log('\n');
for (let fruit of fruits){
    console.log(fruit);
}