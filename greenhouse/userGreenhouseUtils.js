
import { findById, setUser, getUser } from '../userUtils.js';

const user = getUser();
const plants2 = user.plantCollection;

export function userCollectionRender(user) {
    const originPlant = findById(plants2, user.id);

    const li = document.createElement('li');
    
    const h3 = document.createElement('h3');
    h3.textContent = originPlant.name;
    const h6 = document.createElement('h6');
    h6.textContent = originPlant.size;
    li.append(h3, h6);

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
            // cool logic!
            if (removeButton.value === plantFromCollection.id) {
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
    const newPlant = {
        // nice id makin'!
        id: Math.floor(Math.random() * 10000),
        wateringSchedule: createWateringSchedule(Number(userWater)),
        name: form.get('name'),
        size: form.get('plant-size'),
        sunCare: form.get('sunlight'),
        img: '../assets/stock-plant-img.jpg'
        
    };

    user.plantCollection.push(newPlant);
    setUser(user);
}

const scheduleData = 
[
    [3],
    [2, 6],
    [2, 4, 6],
    [1, 3, 5],
    [3, 7], 
    [5]
];

// I'm just eyeballing it, but I think this would do the same thing . . .
export function createWateringSchedule(waterAmount) {
    return scheduleData[waterAmount - 1];
}

 
export function determineWaterAmount(size, category) {
    let waterAmount = 0;
    if (size === 'Small' && category === 'succulents-cactus') {
        waterAmount = 3;
    } else if (size === 'Medium' && category === 'succulents-cactus') {
        waterAmount = 2;
    } else if (size === 'Large' && category === 'succulents-cactus') {
        waterAmount = 1;
    } else if (size === 'Small' && category === 'tropicals') {
        waterAmount = 4;
    } else if (size === 'Medium' && category === 'tropicals') {
        waterAmount = 2;
    } else if (size === 'Large' && category === 'tropicals') {
        waterAmount = 6;
    } else if (size === 'Small' && category === 'air-plants') {
        waterAmount = 3;
    } else if (size === 'Medium' && category === 'air-plants') {
        waterAmount = 5;
    } else if (size === 'Large' && category === 'air-plants') {
        waterAmount = 1;
    } else {
        return alert('Invalid water amount!');
    }
    return waterAmount;
}

const dayMap = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
};

export function dateNumber(dateAdded) {
    return dayMap[dateAdded] || 0;
}
