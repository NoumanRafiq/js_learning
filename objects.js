const person_data = {
    name: 'ali',
    age: 22,
    hobbies: ['programming', 'football', 'foodunist'],
}

person_data['bg'] = 'A+';

// console.log(person_data);

for (let key in person_data){
    console.log(`${key} ->>> ${person_data[key]}`);
    
}

console.log(Object.keys(person_data));


// console.log(person_data.hobbies);
