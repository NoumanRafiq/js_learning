// in this program we will study about the block scope vs function scope
// of let, var & const

{
    let myName = 'Nouman';
    console.log(myName);    
}

{
    var myName = 'Ali';
    console.log(myName);
}

{
    const myName = 'Ahmed';
    console.log(myName);
}

console.log(myName);