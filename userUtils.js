export function makeUser(formData) {
    return {
        name: formData.get('name'),
        returningUser: formData.get('user'),
        plantCollection: []
    };
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    return localStorage.setItem('USER', stringyUser);
}

export function getUser() {
    return JSON.parse(localStorage.getItem('USER'));
}

export function findById(arrayName, idName) {
    for (let i = 0; i < arrayName.length; i++) {
        const item = arrayName[i];

        if (item.name === idName) {
            return item;
        }
    }
    return null;
}