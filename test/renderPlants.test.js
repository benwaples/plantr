// IMPORT MODULES under test here:
import { renderPlants } from '../plantSelection/plantSelectionUtils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const plant = {
        id: 999, 
        name: 'calico hearts', 
        category: 'succulents-cactus', 
        water: 'Minimal Watering - allow soil to dry fully', 
        sunCare: 'indirect', 
        img: '../assets/calico-hearts.jpg' 
    };

    const expected = `<li title="calico hearts"><h3>calico hearts</h3><img src="../assets/calico-hearts.jpg" alt="calico hearts image"><select id="sizeSelectorcalico-hearts"><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option></select><button value="calico-hearts">Add to Greenhouse</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlants(plant);
    const outerActual = actual.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(outerActual, expected);
});
