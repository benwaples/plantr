// import functions and grab DOM elements
import { makeUser, setUser } from './userUtils.js';

const form = document.querySelector('form');

// initialize state

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const userInfo = makeUser(formData);
    setUser(userInfo);
    window.location = './plantSelection';
});

