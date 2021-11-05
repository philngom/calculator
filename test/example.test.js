// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, multiply, divide } from '../math-utils.js';

const test = QUnit.test;

test('test subtract function', (expect) => {
    //Arrange
    const x = 8;
    const y = 2;
    // Set up your arguments and expectations
    const expected = 6;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test multiply function', (expect) => {
    //Arrange
    const x = 1;
    const y = 3;
    // Set up your arguments and expectations
    const expected = 3;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test add function', (expect) => {
    //Arrange
    const x = 1;
    const y = 3;
    // Set up your arguments and expectations
    const expected = 4;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test divide function', (expect) => {
    //Arrange
    const x = 10;
    const y = 2;
    // Set up your arguments and expectations
    const expected = 5;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
