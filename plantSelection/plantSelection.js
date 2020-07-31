import plants from '../data.js';
import { renderPlants } from '../plantSelection/plantSelectionUtils.js';


const plantList = document.getElementById('plant-list');

for (let i = 0; i < plants.length; i++) {
    const plant = plants[i];
    let plantRender = renderPlants(plant);

    plantList.append(plantRender);
}


