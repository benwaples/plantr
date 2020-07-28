import plants from '../data.js';
import { findById, findByName, setUser, getUser } from '../userUtils.js';

const user = getUser();
const plants2 = user.plantCollection;

export function userCollectionRender(user) {
    const originPlant = findById(plants2, user.id);
    const originalPlant2 = findByName(plants, originPlant.name);

    const li = document.createElement('li');
    // li.title = originPlant.name;
    li.style.border = 'solid white 1px';
    
    const h3 = document.createElement('h3');
    h3.textContent = originPlant.name + user.size;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = originalPlant2.img;
    img.alt = originalPlant2.name + ' image';
    li.appendChild(img);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Plant';
    removeButton.value = originPlant.id;
    removeButton.addEventListener('click', () => {
        const user = getUser();

        const usersPlantCollection = user.plantCollection;

        for (let i = 0; i < usersPlantCollection.length; i++) {
            
            const plantFromCollection = usersPlantCollection[i];
            if (Number(removeButton.value) === plantFromCollection.id) {
                usersPlantCollection.splice(i, 1);
            }
        }
        li.classList.add('hidden');
        setUser(user);
        
    }); li.append(removeButton);
    return li;
}

export function addUsersPlant(formEl){
    const user = getUser();
    const form = new FormData(formEl);
    //put random number function in for each ID generation
    const newPlant = {
        id: Math.floor(Math.random() * 10000),
        dateAdded: dateNumber(moment().format('dddd')),
        wateringSchedule: createWateringSchedule(),
        name: form.get('name'),
        plantSize: form.get('plant-size'),
        sunCare: form.get('sunlight'),
        img: form.get('img-upload'),
    };

    user.plantCollection.push(newPlant);
    setUser(user);
}

export function createWateringSchedule(dateNum, waterAmount) {
    let wateringSchedule = []
    // water schedule for light watering
    if (waterAmount === 1) {
        const water1 = dateNum + 2;
        const water2 = dateNum + 4;
        const water3 = dateNum + 6;
        wateringSchedule.push(water1, water2, water3)
    }

    // water schedule for moderate watering

    // water schedule for frequent watering


}

function determineWaterAmount(size, category) {
    let waterAmount = 0;
    // 3 potential water levels
    if (size === 'small' && category === 'cactus') {
        waterAmount = 1
        return waterAmount;
    }

}

function dateNumber(dateAdded) {
    let dateNum = 0
    if (dateAdded === 'Monday') {
        dateNum = 1
    }
    if (dateAdded === 'Tuesday') {
        dateNum = 2
    }
    if (dateAdded === 'Wednesday') {
        dateNum = 3
    }
    if (dateAdded === 'Thursday') {
        dateNum = 4
    }
    if (dateAdded === 'Friday') {
        dateNum = 5
    }
    if (dateAdded === 'Saturday') {
        dateNum = 6
    }
    if (dateAdded === 'Sunday') {
        dateNum = 7
    }

    return dateNum;
}