// we will practice the arrow functions and functions inside funcitons
// and lexical scope in this file.

function mainFunction(){

    const func1 = ()=>{
        console.log('function 1');
    }

    const evenOrOdd = (num)=>{
        if(num%2==0){
            console.log(`${num} is even`);
        }else{
            console.log(`${num} is odd`);
        }
    };
    func1();
    evenOrOdd(2);
    console.log('main function')
}

mainFunction();