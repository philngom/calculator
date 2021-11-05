// import functions and grab DOM elements
import { add, subtract, multiply, divide } from './math-utils.js';
const x = document.querySelector('#x');
const y = document.querySelector('#y');
const arithmetic = document.getElementById('drop-down');
const equals = document.querySelector('#equals');
const answer = document.querySelector('.answer');

const myFunctions = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};

equals.addEventListener('click', () => {
    answer.textContent = myFunctions[arithmetic.value](+x.value, +y.value);
});

// initialize state

// set event listeners
  // get user input
  // use user input to update state
  // update DOM to reflect the new state