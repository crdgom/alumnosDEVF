import {alumnos} from './data.js'
import alumnosLocal from './dataHandler.js';

class Student {
    constructor(nombre, apellido, edad, materias, calificaciones) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materias = materias;
        this.calificaciones = calificaciones;
    }

}

class Materias extends Student {
    constructor(materias) {
        super(materias);
        this.materias = materias;
    }
}

class Calificaciones extends Student {
    constructor(calificaciones) {
        super(calificaciones);
        this.calificaciones = calificaciones;
    }

    promedio() {
        let calificaciones = Object.values(this.calificaciones);
        let promedio = calificaciones.reduce((a, b) => a + b) / calificaciones.length;
        return promedio;
    }
}

function createStudent() {
    try{
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;
        let materias = document.getElementById("materias").value.toUpperCase();
        console.log(materias);
        
        if (materias === "") {
            materias = ["No hay materias"];
        } else {
            let materia = materias.split(",");
            // construir un objeto con las materias
            let materiasObj = [];
            for (let i = 0; i < materia.length; i++) {
                materiasObj.push(materia[i]);
            }
            const student = new Student(nombre, apellido, edad, materiasObj)
            return student;
        }
    }catch{
        alert("Error al crear alumno");
    }
}

// función para agregar alumno e insertarlo en alumnos data.js si el profesor tiene permisos 

function addStudent(){
    let user = JSON.parse(sessionStorage.getItem('user'));
    let permiso = JSON.parse(sessionStorage.getItem('permisos'));
    if (user === user && permiso === true) {
        let listaAlumnos = localStorage.getItem("students");
        // convertimmos lista alumnos en un array
        let alumnosArray = JSON.parse(listaAlumnos);
        console.log(alumnosArray);
        let alumno = createStudent();
        // agregamos el nuevo alumno al array
        alumnosArray.push(alumno);
        // convertimos el array en json y lo guardamos en local storage
        localStorage.setItem("students", JSON.stringify(alumnosArray));
        // devolvemos al usuario al dashboard
        window.location.href = "http://127.0.0.1:5500/public/dashboard.html";
        console.log(window.location.href);
    } else {
        alert("No tiene permisos para agregar alumnos");
    }
}

function createMaterias() {
    try{
        let materias = document.getElementById("materias").value;
        let materiasArray = materias.split(",");
        let materiasObj = {};
        for (let i = 0; i < materiasArray.length; i++) {
            materiasObj[materiasArray[i]] = materiasArray[i];
        }
        return materiasObj;
    }catch{
        alert("Error al crear materias");
    }
}

function getStudents() {
    try{
        let students = [];
        let studentsLocal = localStorage.getItem("students");
        if (studentsLocal === null) {
            return students;
        }
        return JSON.parse(studentsLocal);
    }catch{
        alert("Error al obtener alumnos");
    }
}

export default addStudent;