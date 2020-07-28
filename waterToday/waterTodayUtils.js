import plants from '../data.js';
import { findById } from '../userUtils.js';

export function renderWaterToday(plant) {
    const originPlant = findById(plants, plant.id);
    
    const li = document.createElement('li');
    li.classList.add = 'water-today';
    
    const h3 = document.createElement('h3');
    h3.textContent = plants.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = originPlant.img;
    img.alt = originPlant.name + ' image';
    li.append(img);
    
    const button = document.createElement('button');
    button.textContent = 'Add Water';

    button.addEventListener('click', () => {
        li.classList.add = 'checked';
        button.disabled;
    });

    li.append(button);


    return li;
}