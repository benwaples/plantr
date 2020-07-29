import { findById, getUser } from '../userUtils.js';

const user = getUser();

const plants = user.plantCollection;

export function renderWaterToday(plant) {
    const originPlant = findById(plants, plant.id);

    const li = document.createElement('li');
    li.classList.add('water-today');

    const div1 = document.createElement('div');
    div1.classList.add('main-div');
    
    const img = document.createElement('img');
    img.src = originPlant.img;
    img.alt = originPlant.name + ' image';
    div1.append(img);
    
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon-div');
    div1.append(iconDiv);
    
    const i = document.createElement('img');
    i.src = '../assets/sun.jpg';
    i.classList.add('icon');
    iconDiv.append(i);
    
    const h3 = document.createElement('h3');
    h3.classList.add('h3-title');
    h3.textContent = plant.name;
    li.appendChild(h3);
    
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');
    const button = document.createElement('button');
    button.textContent = 'Add Water';
    buttonDiv.append(button);
    
    button.addEventListener('click', () => {
        li.classList.add = 'checked';
        button.disabled;
    });
    li.append(div1, buttonDiv);


    return li;
}