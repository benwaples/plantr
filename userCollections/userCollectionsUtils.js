import plants from '../data.js';
import { findById, setUser, getUser } from '../userUtils.js';

export function userCollectionRender(user) {
    const originPlant = findById(plants, user.name);

    const li = document.createElement('li');
    li.title = originPlant.name;
    li.style.border = 'solid white 1px';
    
    const h3 = document.createElement('h3');
    h3.textContent = originPlant.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = originPlant.img;
    img.alt = originPlant.name + ' image';
    li.appendChild(img);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Plant';
    removeButton.value = originPlant.name;
    removeButton.addEventListener('click', () => {
        const user = getUser();

        const usersPlantCollection = user.plantCollection;

        for (let i = 0; i < usersPlantCollection.length; i++) {
            
            const plantFromLocal = usersPlantCollection[i];

            if (removeButton.value === plantFromLocal.name) {
                usersPlantCollection.splice(i, 1);
            }
        }
        li.classList.add('hidden');
        setUser(user);
        
    }); li.append(removeButton);
    return li;
}

