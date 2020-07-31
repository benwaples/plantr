import { makeUser, setUser } from './userUtils.js';

const form = document.querySelector('form');
const returningOption = document.querySelector('#returning');
const newOption = document.querySelector('#new');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const userInfo = makeUser(formData);
    setUser(userInfo);
    window.location = './plantSelection';
});

newOption.addEventListener('click', () => {
    form.classList.remove('hidden');
    newOption.classList.add('hidden');
    returningOption.classList.add('hidden');
});

returningOption.addEventListener('click', () => {
    const ifUserExists = localStorage.getItem('PlantrUser');

    if (ifUserExists) {
        window.location = './greenhouse';
    } else {
        alert('you don\'t have a saved profile, do your plants a favor and make one!');
        form.classList.remove('hidden');
        newOption.classList.add('hidden');
        returningOption.classList.add('hidden');
    }

});