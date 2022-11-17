import {profesores} from './data.js';




// store the data in the session storage from profesores

function profesorStorage(){
    sessionStorage.setItem('profesores', JSON.stringify(profesores));
}

profesorStorage()

export default profesorStorage;