import alumnosLocal from './dataHandler.js';

class Student {
    constructor(id, nombre, apellido, edad, materias, calificaciones) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materias = materias;
        this.calificaciones = calificaciones;
    }

}



function createStudent() {
    try{
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;
        let materias = document.getElementById("materias").value.toUpperCase();
        
        
        if (materias === "") {
            materias = ["No hay materias"];
        } else {
            let lastid = localStorage.getItem("students");
            let lastidArray = JSON.parse(lastid);
            let lastidObj = lastidArray[lastidArray.length - 1];
            let lastidNum = lastidObj.id;
            let newid = lastidNum + 1;
            
            let materia = materias.split(",");
            console.log(materia);
            const student = new Student(newid, nombre, apellido, edad, materia);
            return student;
        }
    }catch{
        alert("Error al crear alumno");
    }
}

// función para agregar alumno e insertarlo en alumnos data.js si el profesor tiene permisos

function addStudent(){
    try{
        let user = JSON.parse(sessionStorage.getItem('user'));
        let permiso = JSON.parse(sessionStorage.getItem('permisos'));
        if (user === user && permiso === true) {
            let listaAlumnos = localStorage.getItem("students");
            // convertimmos lista alumnos en un array
            let alumnosArray = JSON.parse(listaAlumnos);
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
    }catch{
        alert("Error al agregar alumno");
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