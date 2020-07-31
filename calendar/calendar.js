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

    if (thisPlant.wateringSchedule.includes(1)) {
        let renderedPlant = renderTableRow(thisPlant);
        tdMonday.append(renderedPlant);
    }

    if (thisPlant.wateringSchedule.includes(2)) {
        let renderedPlant = renderTableRow(thisPlant);
        tdTuesday.append(renderedPlant);
    }

    if (thisPlant.wateringSchedule.includes(3)) {
        let renderedPlant = renderTableRow(thisPlant);
        tdWednesday.append(renderedPlant);
    }

    if (thisPlant.wateringSchedule.includes(4)) {
        let renderedPlant = renderTableRow(thisPlant);
        tdThursday.append(renderedPlant);
    }

    if (thisPlant.wateringSchedule.includes(5)) {
        let renderedPlant = renderTableRow(thisPlant);
        tdFriday.append(renderedPlant);
    }

    if (thisPlant.wateringSchedule.includes(6)) {
        let renderedPlant = renderTableRow(thisPlant);
        tdSaturday.append(renderedPlant);
    }

    if (thisPlant.wateringSchedule.includes(7)) {
        let renderedPlant = renderTableRow(thisPlant);
        tdSunday.append(renderedPlant);
    }
}