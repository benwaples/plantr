import { getUser, setUser } from '../userUtils.js';
import { createWateringSchedule, determineWaterAmount } from '../greenhouse/userGreenhouseUtils.js';

export function renderPlants(plants) {
    const li = document.createElement('li');
    li.title = plants.name;
    

    const h3 = document.createElement('h3');
    h3.textContent = plants.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = plants.img;
    img.alt = plants.name + ' image';
    li.appendChild(img);

    const sizes = ['Small', 'Medium', 'Large'];

    const sizeSelector = document.createElement('select');
    const idName = plants.name.replace(/ /g, '-');
    sizeSelector.id = 'sizeSelector' + idName;
    for (let i = 0; i < sizes.length; i++) {
        const selectElement = document.createElement('option');

        selectElement.value = sizes[i];
        selectElement.textContent = sizes[i];

        sizeSelector.append(selectElement);
    }

    li.append(sizeSelector);
    
    const button = document.createElement('button');
    button.textContent = 'Add to Greenhouse';
    button.value = idName;
    button.addEventListener('click', () => {
        
        const user = getUser();

        const sizeOfPlant = document.querySelector('#sizeSelector' + idName);

        const waterAmount = determineWaterAmount(sizeOfPlant.value, plants.category);
        const makeWateringSchedule = createWateringSchedule(waterAmount);
        
        const newPlant = {
            id: plants.id + sizeOfPlant.value,
            wateringSchedule: makeWateringSchedule,
            category: plants.category,
            name: plants.name,
            size: sizeOfPlant.value,
            img: plants.img,
            sunCare: plants.sunCare
        };

        user.plantCollection.push(newPlant);

        setUser(user);

        alert(plants.name + ' has been added to your collection!');

    });

    li.append(button);

    return li;
}
