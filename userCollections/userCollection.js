import { userCollectionRender } from './userCollectionsUtils.js';

import { getUser } from '../userUtils.js';

const collectionList = document.getElementById('collection-list');
const user = getUser();

for (let i = 0; i < user.plantCollection.length; i++) {
    const plant = user.plantCollection[i];
    const renderUserPlant = userCollectionRender(plant);
    

    collectionList.append(renderUserPlant);
}
    
 