
function sumOfAll (...c){
    let total;
    for(let number of c){
        total = total + number;
    }
    console.log('a, b, c', a, b, c);
    return total;
}

const answer = sumOfAll(1,2,3);
console.log(answer);

