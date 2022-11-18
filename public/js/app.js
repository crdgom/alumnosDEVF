import login from './../js/login.js';
import profesorStorage from './../js/sesionStorage.js';
import addStudent from './alumnos.js';


function urlCheck() {
    let url = window.location.pathname;
    if (url === "/dashboard") {
        
    } else if (url === "/public/infoAlumno.html") {
        
    } else if (url === "/public/create-student.html") {
        let registrarAlumno = document.getElementById('registrarAlumno');
        let registrarAlumnoFn = addStudent;

        registrarAlumno.addEventListener('click', function (e) {
            e.preventDefault();
            registrarAlumnoFn();
        });
    } else if (url === "/public/dashboard.html") {
        profesorStorage();
    } else if (url === "/public/index.html") {
        let loginButton = document.getElementById('loginButton');
        let loginfn = login;

        loginButton.addEventListener('click', function (e) {
            e.preventDefault();
            loginfn();
        });
    } else if (url === "/public/crear-grupo.html") {
            let registrarGrupo = document.getElementById('registrarGrupo');
            let registrarGrupoFn = addGroup;
    
            registrarGrupo.addEventListener('click', function (e) {
                e.preventDefault();
                registrarGrupoFn();
            });
    } else {
        
    }
}

urlCheck();
