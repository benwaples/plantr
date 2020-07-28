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

export function timeFromNow(time) {
    
    // getting time now
    const unixTime = new Date(time).getTime();
    if (!unixTime) return;
    const now = new Date().getTime(); 

    //calculate difference
    const difference = (unixTime / 1000) - (now / 1000);

    // returning object 
    const tfn = {};

    //now or past or future
    tfn.when = 'now';
    if (difference > 0) {
        tfn.when = 'future';
    }

}