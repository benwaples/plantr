import { renderWaterToday } from '../waterToday/waterTodayUtils.js';
import { getUser } from '../userUtils.js';
import { dateNumber } from '../greenhouse/userGreenhouseUtils.js';

const waterTodayList = document.getElementById('water-today-list');

const user = getUser();
const today = dateNumber(moment().format('dddd'));

const userCollection = user.plantCollection;

for (let i = 0; i < userCollection.length; i++) {
    const plant = userCollection[i];

    for (let j = 0; j < plant.wateringSchedule.length; j++) {
        // nice nested for loop!
        const subPlant = plant.wateringSchedule[j];

        if (subPlant === today) {
            let newPlant = renderWaterToday(plant);
            waterTodayList.append(newPlant);
        }
    }
}
