
import { findById, setUser, getUser } from '../userUtils.js';

// const user = getUser();
// const plants2 = user.plantCollection;

export function userCollectionRender(user) {
    const originPlant = findById(plants2, user.id);

    const li = document.createElement('li');
    
    
    const h3 = document.createElement('h3');
    h3.textContent = originPlant.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = originPlant.img;
    img.alt = originPlant.name + ' image';
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
    const userWater = form.get('water');
    //put random number function in for each ID generation
    const newPlant = {
        id: Math.floor(Math.random() * 10000),
        wateringSchedule: createWateringSchedule(Number(userWater)),
        name: form.get('name'),
        plantSize: form.get('plant-size'),
        sunCare: form.get('sunlight'),
        img: '../assets/stock-plant-img.jpg'
        
    };

    user.plantCollection.push(newPlant);
    setUser(user);
}

export function createWateringSchedule(waterAmount) {
    let wateringSchedule = [];
    // water schedule for light watering
    if (waterAmount === 1) {
        const water1 = 3;
        wateringSchedule.push(water1);
    } else if (waterAmount === 2) {
        const water1 = 2;
        const water2 = 6;
        wateringSchedule.push(water1, water2);
    } else if (waterAmount === 3) {
        const water1 = 2;
        const water2 = 4;
        const water3 = 6;
        wateringSchedule.push(water1, water2, water3);
    }
    return wateringSchedule;
}
 
export function determineWaterAmount(size, category) {
    let waterAmount = 0;
    // 3 potential water levels
    if (size === 'Small' && category === 'succulents-cactus') {
        waterAmount = 3;
    } else if (size === 'Medium' && category === 'succulents-cactus') {
        waterAmount = 2;
    } else if (size === 'Large' && category === 'succulents-cactus') {
        waterAmount = 1;
    } else if (size === 'Small' && category === 'tropicals') {
        waterAmount = 3;
    } else if (size === 'Medium' && category === 'tropicals') {
        waterAmount = 2;
    } else if (size === 'Large' && category === 'tropicals') {
        waterAmount = 1;
    } else if (size === 'Small' && category === 'air-plants') {
        waterAmount = 3;
    } else if (size === 'Medium' && category === 'air-plants') {
        waterAmount = 2;
    } else if (size === 'Large' && category === 'air-plants') {
        waterAmount = 1;
    } else {
        return alert('Invalid water amount!');
    }
    return waterAmount;
}

export function dateNumber(dateAdded) {
    let dateNum = 0;
    if (dateAdded === 'Monday') {
        dateNum = 1;
    }
    if (dateAdded === 'Tuesday') {
        dateNum = 2;
    }
    if (dateAdded === 'Wednesday') {
        dateNum = 3;
    }
    if (dateAdded === 'Thursday') {
        dateNum = 4;
    }
    if (dateAdded === 'Friday') {
        dateNum = 5;
    }
    if (dateAdded === 'Saturday') {
        dateNum = 6;
    }
    if (dateAdded === 'Sunday') {
        dateNum = 7;
    }

    return dateNum;
}
