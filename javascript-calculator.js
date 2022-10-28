let num3 = 0;
let num2 = 0;

function add(num1,num2){
    let sum = num1 + num2;
    num3 = sum;
    return num3;
}

function subtract(num1,num2){
    let difference = num1 - num2
    num3 = difference;
    return num3;
}

function multiply(num1,num2){
    let product = num1 * num2;
    num3 = product;
    return num3;
}

function divide(num1,num2){
    if(num2 === 0){
        return "ERROR"
    }
    let quotient = num1 / num2
    num3 = quotient;
    return num3;
}

function operate(operator,num3,num4){
    
}

console.log(divide(.3,1.5))  