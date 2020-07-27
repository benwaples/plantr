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
