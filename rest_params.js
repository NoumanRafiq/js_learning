function add(a,b, ...c){
    console.log('value of a::',a);
    console.log('value of b::',b);
    console.log('value of c::',c);
}

add(1,2, 1,2,3);

console.log('\n');
console.log('-----[spread operator]-----');
console.log('\n');

function sumOfAll (...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    // console.log('a, b, c', a, b, c);
    return total;
}

const answer = sumOfAll(4,1,2,3);
console.log(answer);

