export function makeUser(formData) {
    return {
        name: formData.get('name'),
        plantCollection: []
    };
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    return localStorage.setItem('PlantrUser', stringyUser);
}

export function getUser() {
    return JSON.parse(localStorage.getItem('PlantrUser'));
}

export function findById(arrayName, idName) {
    for (let i = 0; i < arrayName.length; i++) {
        const item = arrayName[i];

        if (item.id === idName) {
            return item;
        }
    }
    return null;
}

export function findByName(arrayName, idName) {
    for (let i = 0; i < arrayName.length; i++) {
        const item = arrayName[i];

        if (item.name === idName) {
            return item;
        }
    }
    return null;
}
