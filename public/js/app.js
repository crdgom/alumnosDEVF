import login from './../js/login.js';
import profesorStorage from './../js/sesionStorage.js';
import addStudent from './alumnos.js';


function urlCheck() {
    let url = window.location.pathname;
    console.log(url);
    if (url === "/dashboard") {
        
    } else if (url === "/alumnos") {
        
    } else if (url === "/public/create-student.html") {
        let registrarAlumno = document.getElementById('registrarAlumno');
        let registrarAlumnoFn = addStudent;

        registrarAlumno.addEventListener('click', function (e) {
            e.preventDefault();
            registrarAlumnoFn();
        });
    } else if (url === "/public/dashboard") {
        profesorStorage();
    } else if (url === "/public/") {
        let loginButton = document.getElementById('loginButton');
        let loginfn = login;

        loginButton.addEventListener('click', function (e) {
            e.preventDefault();
            loginfn();
        });
    } else {
        
    }
}

urlCheck();