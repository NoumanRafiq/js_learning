// object(maps) destructuring

const user = {
    name: 'Ali',
    age: 23,
    education: 'hssc',
    qualification: 'fsc'
};

let {name, age, ...newObj} = user;

console.log(name);
console.log(age);
console.log(newObj);

