// IMPORT MODULES under test here:
import { determineWaterAmount, createWateringSchedule, dateNumber } from '../utilsTest/testUtils.js';

const test = QUnit.test;

test('test function for size and water amount', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arg1 = 'Small';
    const arg2 = 'succulents-cactus';

    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWaterAmount(arg1, arg2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test function for createWateringSchedule', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arg1 = 1;

    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createWateringSchedule(arg1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test function for day of the week', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arg1 = 'Wednesday';
    

    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = dateNumber(arg1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
