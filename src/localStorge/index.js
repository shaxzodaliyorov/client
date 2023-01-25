export const setItem = (key, value) => {
    try {
        localStorage.setItem(key, value)
    } catch (error) {
        console.log(error);
    }
}

export const getItem = (key) => {
    try {
        return localStorage.getItem(key)
    } catch (error) {
        console.log(error);
    }
}

export const removeItem = (key) => {
    try {
        localStorage.removeItem(key)
    } catch (error) {
        console.log(error);
    }
}