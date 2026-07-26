// what are functions in js

const simplePrint = function (functionParam){
    // console.log(functionParam);
    return functionParam;
}

const findTarget = function (arr, target){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i]===target){
            // console.log(`the value is on index ${i}`);
            
            return i;
        }
    }
    // console.log('we didn\'t find the value');
    
    return -1;
}

const array = [1,2,5,6];
// findTarget(array, 2);
console.log(findTarget(array, 2));

let name = "Ali";
name[0] = 'a';
console.log(name);

// a function can be assignable to a variable. 
console.log(simplePrint('salam'));