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

    const sunDiv = document.createElement('div');
    sunDiv.classList.add('sun-div');
    
    const i1 = document.createElement('img');
    i1.src = '../assets/sun.jpg';
    i1.classList.add('icon');
    sunDiv.append(i1);

    const span1 = document.createElement('span');
    span1.textContent = originPlant.sunCare + ' sunlight';
    sunDiv.append(span1);

    const waterDiv = document.createElement('div');
    waterDiv.classList.add('sun-div');

    const i2 = document.createElement('img');
    i2.src = '../assets/water.jpg';
    i2.classList.add('icon');
    waterDiv.append(i2);

    const span2 = document.createElement('span');
    span2.textContent = originPlant.wateringSchedule + ' x week';
    waterDiv.append(span2);

    iconDiv.append(sunDiv, waterDiv);
    
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
        li.classList.add('checked');
        button.disabled = true;
    });
    li.append(div1, buttonDiv);


    return li;
}