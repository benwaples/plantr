import { getUser, setUser } from '../userUtils.js';
import { createWateringSchedule, dateNumber, determineWaterAmount } from '../userCollections/userCollectionsUtils.js';

export function renderPlants(plants) {
    const li = document.createElement('li');
    li.title = plants.name;
    li.style.border = 'solid white 1px';

    const h3 = document.createElement('h3');
    h3.textContent = plants.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = plants.img;
    img.alt = plants.name + ' image';
    li.appendChild(img);

    const sizes = ['small', 'medium', 'large'];

    const sizeSelector = document.createElement('select');
    sizeSelector.id = 'sizeSelector' + plants.name;
    for (let i = 0; i < sizes.length; i++) {
        const selectElement = document.createElement('option');

        selectElement.value = sizes[i];
        selectElement.textContent = sizes[i];

        sizeSelector.append(selectElement);
    }

    li.append(sizeSelector);
    
    const button = document.createElement('button');
    button.textContent = 'Add to Greenhouse';
    button.value = plants.name;
    button.addEventListener('click', () => {
        
        const user = getUser();

        const sizeOfPlant = document.querySelector('#sizeSelector' + plants.name);

        const today = dateNumber(moment().format('dddd'));
        const waterAmount = determineWaterAmount(sizeOfPlant.value, plants.category);
        const makeWateringSchedule = createWateringSchedule(today, waterAmount);
        
        const newPlant = {
            id: Math.floor(Math.random() * 10000),
            dateAdded: today,
            wateringSchedule: makeWateringSchedule,
            category: plants.category,
            name: plants.name,
            size: sizeOfPlant.value
        };

        user.plantCollection.push(newPlant);

        setUser(user);

        alert(plants.name + ' has been added to your collection!');

    });

    li.append(button);

    return li;
}
