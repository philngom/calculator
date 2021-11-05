// import functions and grab DOM elements
import { add, subtract, multiply, divide } from './math-utils.js';
const x = document.querySelector('#x');
const y = document.querySelector('#y');
const arithmetic = document.getElementById('drop-down');
const equals = document.querySelector('#equals');
const answer = document.querySelector('.answer');

// initialize state

// set event listeners
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
equals.addEventListener('click', () => {
  // console.log(arithmetics)
    if (arithmetic.value === 'add') {
        answer.textContent = add(+x.value, +y.value);
    } else if (arithmetic.value === 'subtract') {
        answer.textContent = subtract(+x.value, +y.value);
    } else if (arithmetic.value === 'multiply') {
        answer.textContent = multiply(+x.value, +y.value);
    } else if (arithmetic.value === 'divide') {
        answer.textContent = divide(+x.value, +y.value);
    }
    // console.log(arithmetic.value(x, y));
});

