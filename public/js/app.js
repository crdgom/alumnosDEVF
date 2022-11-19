import login from './../js/login.js';
import profesorStorage from './../js/sesionStorage.js';
import addStudent from './alumnos.js';
import addGroup from './newGroup.js';
import {getAlumnoInfo, addMateria, deleteMateria} from './alumnoInfoController.js';


function urlCheck() {
    let url = window.location.pathname;
    if (url === "/dashboard") {
        
    } else if (url === "/public/alumno-info.html") {
        let inicializador = getAlumnoInfo();
        let addMateriaBtn = document.getElementById('registrarMateria');
        let addMateriafn = addMateria;

        addMateriaBtn.addEventListener('click', function (e) {
            e.preventDefault();
            addMateriafn();
        });

        let deleteMateriaBtn = document.getElementById('eliminarMateria');
        let deleteMateriafn = deleteMateria;

        deleteMateriaBtn.addEventListener('click', function (e) {
            e.preventDefault();
            deleteMateriafn();
        });
        
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
