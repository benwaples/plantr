// IMPORT MODULES under test here:
import { determineWaterAmount } from '../greenhouse/userGreenhouseUtils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
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
    expect.deepEqual(actual, expected);
});
