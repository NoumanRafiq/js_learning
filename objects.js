// const person_data = {
//     name: 'ali',
//     age: 22,
//     hobbies: ['programming', 'football', 'foodunist'],
// }

// person_data['bg'] = 'A+';

// // console.log(person_data);

// for (let key in person_data){
//     console.log(`${key} ->>> ${person_data[key]}`);
// }
// console.log('\n');

// for (let key of Object.keys(person_data)){
//     console.log(key,"-",person_data[key]);  
//     // console.log(`${key} ->>> ${person_data[key]}`);
// }

const obj1 = {
    key1: 'val1',
    key2: 'val2',
    key3: "thrid modified",
    key4: 'fourth modified'
};
const obj2 = {
    key1: 'Unique1st',
    key2:'Unique2nd',
    key3: 'val3',
    key4: 'val4',
};

const newObj = {
    ...obj1, ...obj2
}
console.log(newObj);
// console.log(person_data.hobbies);
