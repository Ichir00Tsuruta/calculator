//variables for storing values  
let num1 = null;
let operator = null; 
let num2 = null;
let result = null; 
let inputs = [];

//variables for calculator UI 
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator"); 
let equals = document.querySelector(".enter");
let display = document.querySelector(".display"); 
let ce = document.querySelector(".clear-everything"); 
let c = document.querySelector(".clear");
let sign = document.querySelector(".posneg");
let decimal =document.querySelector(".decimal");

//variables for start state 
let firstNumberEntered = false; 
let secondNumber = false;
let secondNumberEntered = false;  // do i need both of these? 
let operatorSelected = false; 
let otherButtons = false; 
let positive = true;



//helper for clear
c.addEventListener ("click", function() {
    clear();
})

//function for clear 
function clear () {
    inputs = [];
    if (!secondNumber) {
        num1 = null;
        updateDisplay("0"); 
    } else {
        num2 = null; 
        updateDisplay(`${num1} ${operator}`);
    }
}

//helper for clear-everything 
ce.addEventListener("click", function() {
    clearEverything();
})

//function for clear-everything 
function clearEverything () {
    inputs = [];
    num1 = null;
    operator = null; 
    num2 = null;
    result = null;
    secondNumber = false;
    secondNumberEntered = false;  // do i need both of these? 
    operatorSelected = false;
    firstNumberEntered = false;
    updateDisplay("0");  

}

//function for four operators 
function add (num1, num2) {
    return result = num1+num2;
}

function subtract (num1, num2) {
    return result = num1-num2;
}

function multiply (num1, num2) {
    return result = num1*num2;
}

function division (num1, num2) {
    if (num2 === 0) {
        return "ERROR";
    }
    return result = (num1/num2);
}

//helper for number input 
numbers.forEach(button => {
    button.addEventListener("click", (e) => {
        numberInput(e.target.textContent);
    })
})

//function to handle number input
function numberInput (value) {
    inputs.push(value); 
    inputsJoined = inputs.join(""); 
    inputsNumber = parseFloat(Number(inputsJoined).toFixed(10)); 
    console.log(inputsNumber); 

    if (!secondNumber) {
        num1 = inputsNumber;
        firstNumberEntered = true;
        updateDisplay(num1);
    } else {
        num2 = inputsNumber;
        secondNumberEntered = true; 
        updateDisplay(`${num1} ${operator} ${num2}`);
    }
}

//function for updating display 
function updateDisplay (content) {
    display.textContent = content;
}

//helper for operator input 
operators.forEach(button => {
    button.addEventListener("click", (e) => {
        if (!firstNumberEntered) {
            return;
        }
        if (secondNumberEntered) {
            return;
        }
        operator = e.target.textContent; 
        console.log(operator);
        operatorSelected = true;
        secondNumber = true;
        inputs = [];
        updateDisplay(`${num1} ${operator}`);

})
})

//function for operation 
function operate () {
    if (operator === "+") {
        return add (num1,num2);
    } else if (operator === "-") {
        return subtract (num1,num2);
    } else if (operator === "x") {
       return multiply (num1,num2); 
    } else if (operator === "÷") {
        return division (num1,num2); 
    }
}
operate ();

//function for calculation including helper for equal sign 
function doMath () {
    equals.addEventListener("click", (e) => {
        result = operate ();
        console.log(result);
        display.textContent = `${result}`;

        num1 = result; 
        num2 = null; 
        operator = null;
        inputs = [];
        operatorSelected = false;
        secondNumber = false;
        secondNumberEntered = false; 
    })
}
doMath();

//helper for +/-
sign.addEventListener("click", (e) => {
    console.log('click');
    posneg();
    if (!secondNumber) {
        updateDisplay(`${num1}`);
    } else {
        updateDisplay (`${num1} ${operator} ${num2}`);
    }
})

//function to change the most recently inputted number into pos or neg 
function posneg () {
    if (!secondNumber) {
        num1 = -num1;
    } else {
        num2 = -num2;
    } }

//helper for adding decimal 
decimal.addEventListener("click", (e) =>{
    addDecimal();
})

//function to add decimal to number 
function addDecimal () {
    if (!inputs.includes(".")) {
        inputs.push(".");
    }

    const inputString = inputs.join("");

    if (!secondNumber) {
        updateDisplay(`${inputString}`);
        firstNumberEntered = true; 
    } else {
        secondNumberEntered = true;
        updateDisplay (`${num1} ${operator} ${inputString}`);
    }
}

/*
//function for operator input 
operators.forEach(button => {
    button.addEventListener("click", (e) => {
        if (secondNumberEntered) {
            return;
        } 
        operator = e.target.textContent;
        inputs = [];
        updateDisplay(`${num1} ${operator}`);
        operatorSelected = true;
    })
})

function numberInput (value)
numbers.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.textContent;
        inputs.push(value);
        inputsJOined = inputs.join(""); 
        inputsNumber = Number(inputsJoined); 
        console.log(inputsNumber); 
    })
})

numbers.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.textContent;
        inputs.push(value);
        console.log(inputs);
        inputsJoined = inputs.join("");
        inputsNumber = Number(inputsJoined);
        console.log(inputsNumber);

        if (!secondNumber) {
            num1 = inputsNumber;
            console.log(num1); 
            display.textContent = `${num1}`;
        } else {
            num2 = inputsNumber;
            console.log(num2);
            secondNumberEntered = true; 
            display.textContent = `${num1} ${operator} ${num2}`;
        }
    })
})

operators.forEach(button => {
    button.addEventListener("click", (e) => {
        operator = e.target.textContent;
        console.log(operator);
        
        secondNumber = true;
        inputs = [];
        display.textContent = `${num1} ${operator}`
    })
}) 

operators.forEach(button => {
    button.addEventListener("click", (e) => {
        if (secondNumberEntered) {
            return;
        } 
        operator = e.target.textContent;
        console.log(operator);
        secondNumber = true;
        inputs = [];
        display.textContent = `${num1} ${operator}`; 
        operatorSelected = true;  

    })
})
*/