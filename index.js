const firstNumber = +prompt("First number - ");
const operation = prompt("Enter operation - ");
const secondNumber = +prompt("Second number - ");
let result;

if(isNaN(firstNumber) === true || isNaN(secondNumber) === true) {
    if (operation === "*"){
        result = firstNumber * secondNumber;
    }else if ( operation === "+"){
        result = firstNumber + secondNumber;
    }else if (operation === "-"){
        result = firstNumber - secondNumber;
    }else{
        alert("This operation is not exist");
    }
    alert("Your result is " + result);
}else   {
    alert("Incorrect number");
}


