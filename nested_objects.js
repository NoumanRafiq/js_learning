
const users = [
    {userId: 1, name: "Zohaib", semester: "6th"},
    {userId: 2, name: "Ali", semester: "3rd"},
    {userId: 3, name: "Hamid", semester: "7th"},
];

let [{userId},{name}, {userId:user, semester}] = users;
for(let user of users){
    console.log(user);
    
}
console.log(userId);
console.log(name);
console.log(semester);
console.log(user);
