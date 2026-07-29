
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

