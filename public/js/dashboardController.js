// recuperar el usuario de sessionStorage

let user = JSON.parse(sessionStorage.getItem('user'));

// recuperar los permisos de sessionStorage

let permiso = JSON.parse(sessionStorage.getItem('permisos'));

// imprimir el nombre del usuario en el dashboard

let userInfo = document.getElementById('userInfo');

userInfo.innerHTML = user

// comprobar permisos

function permisos(){

    if (permiso !== true) {
        console.log("no tiene permisos");
    } else {
        console.log("tiene permisos");
    }

}

// recuperar studenst de localStorage

let students = JSON.parse(localStorage.getItem('students'));

let alumnoBase = students

// sumar el numero de alumnos en el dashboard

let alumnosCount = alumnoBase.length;

let alumnosCountNumber = document.getElementById('alumnosCount');

alumnosCountNumber.innerHTML = alumnosCount

// recuperar el numero de materias

let materiasCount = document.getElementById('materiasCount');


function listAlumnos(){
    let alumnosList = document.getElementById('table');

        for (let i = 0; i < alumnoBase.length; i++) {
    
            alumnosList.innerHTML += `
        <tr>
            <td>${alumnoBase[i].nombre}</td>
            <td>${alumnoBase[i].apellido}</td>
            <td>${alumnoBase[i].edad}</td>
            <td>${alumnoBase[i].grupo}</td>
            <td id="materias">${alumnoBase[i].materias}</td>
            <td id="calificaciones"></td>
        </tr>
        `

    }
    

}




// inicialización de funciones


listAlumnos()

