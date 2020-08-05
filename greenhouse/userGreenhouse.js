import { userCollectionRender, addUsersPlant } from './userGreenhouseUtils.js';

import { getUser } from '../userUtils.js';

const collectionList = document.getElementById('collection-list');
const form = document.querySelector('form');

const user = getUser();

const h2 = document.getElementById('user-greenhouse');
h2.textContent = `${user.name}'s Greenhouse`;

for (let i = 0; i < user.plantCollection.length; i++) {
    const plant = user.plantCollection[i];
    const renderUserPlant = userCollectionRender(plant);
    
    collectionList.append(renderUserPlant);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    addUsersPlant(form);

    window.location = '';
    
});
