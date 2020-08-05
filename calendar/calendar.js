import { renderTableRow } from '../calendar/calendarUtils.js';
import { getUser } from '../userUtils.js';

const tdMonday = document.querySelector('#monday');
const tdTuesday = document.querySelector('#tuesday');
const tdWednesday = document.querySelector('#wednesday');
const tdThursday = document.querySelector('#thursday');
const tdFriday = document.querySelector('#friday');
const tdSaturday = document.querySelector('#saturday');
const tdSunday = document.querySelector('#sunday');

const user = getUser();

for (let i = 0; i < user.plantCollection.length; i++) {
    const thisPlant = user.plantCollection[i];

    // i could be off, but it seems like this could have been done procedurally in another for loop like so:
    const daysTds = [tdMonday, tdTuesday, tdWednesday, tdThursday, tdFriday, tdSaturday, tdSunday];
    
    for (let j = 0; j < 7; j++) {
        if (thisPlant.wateringSchedule.includes(i + 1)) {
            let renderedPlant = renderTableRow(thisPlant);
            daysTds[i].append(renderedPlant);
        } 
    }
}