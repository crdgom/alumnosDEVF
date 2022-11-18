// recuperar el usuario de sessionStorage

let user = JSON.parse(sessionStorage.getItem('user'));

// recuperar los permisos de sessionStorage

let permiso = JSON.parse(sessionStorage.getItem('permisos'));

// imprimir el nombre del usuario en el dashboard

let userInfo = document.getElementById('userInfo');

userInfo.innerHTML = user



// recuperar students de localStorage

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

            let cals
            let promedio

            if (alumnoBase[i].hasOwnProperty("calificaciones")) {

                cals = Object.values(alumnoBase[i].calificaciones)
                // promediar las calificaciones
                promedio = cals.reduce((a, b) => a + b) / cals.length;

            }else {

                    cals = "No hay calificaciones"
                    promedio = "No hay calificaciones"

                }
            alumnosList.innerHTML += `
        <tr>
            <td id="${alumnoBase[i].id}"><a href="">${alumnoBase[i].nombre}</a></td>
            <td>${alumnoBase[i].apellido}</td>
            <td>${alumnoBase[i].edad}</td>
            <td class="grupo">${alumnoBase[i].grupo}</td>
            <td class="grupo">${alumnoBase[i].materias}</td>
            <td>${promedio}</td>
        </tr>
        `
    }
}

// funcion para recuperar el id del alimno cuando se da click en el nombre de la tabla HTML

function alumnoInfo(){
    let alumnosList = document.getElementById('table');
    alumnosList.addEventListener('click', function(e){
        e.preventDefault();
        let id = e.target.parentElement.id;
        let alumno = alumnoBase.find(alumno => alumno.id == id);
        localStorage.setItem('alumnoInfo', JSON.stringify(alumno));
        window.location.href = "http://127.0.0.1:5500/public/alumno-info.html";
    })
}

function grupoCheck(){
    let grupoCheck = document.querySelectorAll('.grupo');
    for (let i = 0; i < grupoCheck.length; i++) {
        if (grupoCheck[i].innerHTML === "undefined") {
            grupoCheck[i].innerHTML = "Grupo no asignado"
        } else {
        }
    }   
}





// inicialización de funciones


listAlumnos()
grupoCheck()
alumnoInfo()

