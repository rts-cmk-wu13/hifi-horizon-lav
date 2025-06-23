
/**
 * save an item to local sotrage
 * @param {string} key 
 * @param { T } value - value to be saved
 */
export function saveToLocalStorage<T>(key: string, value : T) : void {
    localStorage.setItem(key, JSON.stringify(value))
}


/**
 * read an item from local storage
 * @param {string} key - key to be read from local storage
 * @returns { T | null} - value to be read and parsed
 */
export function readFromLocalStorage<T>(key : string) : T | null {

    const item = localStorage.getItem(key);

    return item ? (JSON.parse(item) as T) : null;   
}


/**
 * remove an item from local storage
 * @param {string} key - key to be removed from local storage
 * @returns {undefined} - no return value
 */
export function removeFromLocalStorage(key : string) : void {
    localStorage.removeItem(key)
}






/**
 * save an item to session storage
 * @param {string} key 
 * @param { T } value - value to be saved
 */
export function saveToSessionStorage<T>(key: string, value : T) : void {
    sessionStorage.setItem(key, JSON.stringify(value))
}


/**
 * read an item from session storage
 * @param {string} key - key to be read from session storage
 * @returns { T | null} - value to be read and parsed
 */
export function readFromSessionStorage<T>(key : string) : T | null {

    const item = sessionStorage.getItem(key);

    return item ? (JSON.parse(item) as T) : null;   
}


/**
 * remove an item from session storage
 * @param {string} key - key to be removed from session storage
 * @returns {undefined} - no return value
 */
export function removeFromSessionStorage(key : string) : void {
    sessionStorage.removeItem(key)
}