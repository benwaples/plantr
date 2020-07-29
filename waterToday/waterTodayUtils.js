import plants from '../data.js';
import { findById } from '../userUtils.js';

export function renderWaterToday(plant) {
    const originPlant = findById(plants, plant.id);

    const li = document.createElement('li');
    li.classList.add = 'water-today';

    const div1 = document.createElement('div');
    div1.classList.add('main-div');
    
    const img = document.createElement('img');
    img.src = originPlant.img;
    img.alt = originPlant.name + ' image';
    div1.append(img);
    
    const iconDiv = document.createElement('div');
    div1.append(iconDiv);
    
    const i = document.createElement('i');
    i.classList.add('fa');
    i.classList.add('fa-sun-o');
    i.classList.add('fa-lg');
    i.setAttribute('aria-hidden', 'true');
    i.style.color = 'yellow';
    iconDiv.append(i);
    
    const h3 = document.createElement('h3');
    h3.textContent = plants.name;
    li.appendChild(h3);
    
    
    const button = document.createElement('button');
    button.textContent = 'Add Water';
    
    button.addEventListener('click', () => {
        li.classList.add = 'checked';
        button.disabled;
    });
    li.append(div1);
    li.append(button);


    return li;
}