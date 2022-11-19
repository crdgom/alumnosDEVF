import "./../vendor/chart.js/Chart.min.js";

function getAlumnoInfo() {
    let infoAlumno = document.getElementById("NombreAlumnoInfo")
    let nombre = document.getElementById("NombreAlumnoInfoNombre")
    let apellido = document.getElementById("NombreAlumnoInfoApellido")
    let edad = document.getElementById("NombreAlumnoInfoEdad")
    let grupo = document.getElementById("NombreAlumnoInfoGrupo")
    let materias = document.getElementById("table-materias")
    let calificaciones = document.getElementById("table-calificaciones")
    let promedio = document.getElementById("NombreAlumnoInfoPromedio")
    let evalResultado = document.getElementById("AlumnoEvalResultado")
    let user = JSON.parse(sessionStorage.getItem('user'));
    let userInfo = document.getElementById('userInfo');

    userInfo.innerHTML = user
    
    let alumno = JSON.parse(localStorage.getItem('alumnoInfo'));
    

    infoAlumno.innerHTML = alumno.nombre
    nombre.innerHTML = alumno.nombre
    apellido.innerHTML = alumno.apellido
    edad.innerHTML = alumno.edad
    if (alumno.hasOwnProperty("grupo")) {
        grupo.innerHTML = alumno.grupo
    }else {
        grupo.innerHTML = "Este alumno no tiene grupo asignado"
    }
    if (alumno.hasOwnProperty("materias")) {
        let materiasArray = Object.values(alumno.materias)
        for(let i = 0; i < materiasArray.length; i++){
            materias.innerHTML += `
            <tr>
                <td>${materiasArray[i]}</td>
            </tr>
            `
        }
    }else {
        materias.innerHTML = "Este alumno no tiene materias asignadas"
    }

    if (alumno.hasOwnProperty("calificaciones")) {
        let materiasArray = Object.keys(alumno.calificaciones)
        let calificacionesArray = Object.values(alumno.calificaciones)
        let promedio = calificacionesArray.reduce((a, b) => a + b) / calificacionesArray.length;
        let totalPromedio = 10 - promedio
        for(let i = 0; i < calificacionesArray.length; i++){
            calificaciones.innerHTML += `
            <tr>
                <td>${materiasArray[i]}</td>
                <td>${calificacionesArray[i]}</td>
            </tr>
            `
        }
        // pie chart data

        // Set new default font family and font color to mimic Bootstrap's default styling
            Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
            Chart.defaults.global.defaultFontColor = '#858796';

            // Pie Chart Example
            var ctx = document.getElementById("myPieChart");
            var myPieChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Promedio", "Total"],
                datasets: [{
                data: [promedio, totalPromedio],
                backgroundColor: ['#1cc88a','#d1d3e2'],
                hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
                },
                legend: {
                display: true
                },
                cutoutPercentage: promedio,
            },
            });

            switch (true) {
                case promedio >= 9:
                    evalResultado.innerHTML = promedio + " - Excelente"
                    break;
                case promedio >= 8:
                    evalResultado.innerHTML = promedio + " - Muy Bueno"
                    break;
                case promedio >= 7:
                    evalResultado.innerHTML = promedio + " - Bueno"
                    break;
                case promedio >= 6:
                    evalResultado.innerHTML = promedio + " - Regular"
                    break;
                case promedio >= 5:
                    evalResultadoo.innerHTML = promedio + " - Insuficiente"
                    break;
                default:
                    evalResultado.innerHTML = promedio + " - No hay calificaciones"
                    break;
            }
    }else {
        calificaciones.innerHTML = "Este alumno no tiene calificaciones"
        promedio.innerHTML = "Este alumno no tiene calificaciones"
    }


}

function addMateria() {
    let materia = document.getElementById("agregar-eliminar-materia").value.toUpperCase()
    let alumno = JSON.parse(localStorage.getItem('alumnoInfo'));
    let profesor = JSON.parse(sessionStorage.getItem('user'));
    let permisos = JSON.parse(sessionStorage.getItem('permisos'));

    console.log(materia)

   

    if (profesor === profesor && permisos === true) {
        if (alumno.hasOwnProperty("materias")) {
            let materiasArray = Object.values(alumno.materias)
            console.log(materiasArray)
            if (materiasArray.includes(materia)) {
                setInterval(function () {
                    document.getElementById('alert').innerHTML = "";
                }, 3000);
                document.getElementById('alert').innerHTML = `
                    <div class="col-lg-6 mb-4">
                        <div class="card bg-danger text-white shadow">
                            <div class="card-body">
                                No se puede agregar la materia ${materia} porque ya existe
                            </div>
                        </div>
                    </div>
                    `
            }else{
                materiasArray.push(materia)
                alumno.materias = materiasArray
                localStorage.setItem('alumnoInfo', JSON.stringify(alumno));
                setInterval(function () {
                    document.getElementById('alert').innerHTML = "";
                    location.reload()
                }, 3000);
                document.getElementById('alert').innerHTML = `
                    <div class="col-lg-6 mb-4">
                        <div class="card bg-success text-white shadow">
                            <div class="card-body">
                                Materia agregada correctamente
                            </div>
                        </div>
                    </div>
                    `
                    
                }
            }else {
            setInterval(function () {
                document.getElementById('alert').innerHTML = "";
            }, 3000);
            document.getElementById('alert').innerHTML = `
                <div class="col-lg-6 mb-4">
                    <div class="card bg-danger text-white shadow">
                        <div class="card-body">
                            No tienes permisos para agregar materias
                        </div>
                    </div>
                </div>
                `
            }   
    }
}

function deleteMateria() {
    let materia = document.getElementById("agregar-eliminar-materia").value.toUpperCase()
    let alumno = JSON.parse(localStorage.getItem('alumnoInfo'));
    let profesor = JSON.parse(sessionStorage.getItem('user'));
    let permisos = JSON.parse(sessionStorage.getItem('permisos'));

    if(profesor === profesor && permisos === true){
        if (alumno.hasOwnProperty("materias")) {
            let materiasArray = Object.values(alumno.materias)
            console.log(materiasArray)
            if (materiasArray.includes(materia)) {
                let index = materiasArray.indexOf(materia)
                console.log(index)
                materiasArray.splice(index, 1)
                alumno.materias = materiasArray
                localStorage.setItem('alumnoInfo', JSON.stringify(alumno));
                setInterval(function () {
                    document.getElementById('alert').innerHTML = "";
                    location.reload()
                }, 3000);
                document.getElementById('alert').innerHTML = `
                    <div class="col-lg-6 mb-4">
                        <div class="card bg-success text-white shadow">
                            <div class="card-body">
                                Materia eliminada correctamente
                            </div>
                        </div>
                    </div>
                    `
                  
            }else{
                setInterval(function () {
                    document.getElementById('alert').innerHTML = "";
                }, 3000);
                document.getElementById('alert').innerHTML = `
                    <div class="col-lg-6 mb-4">
                        <div class="card bg-danger text-white shadow">
                            <div class="card-body">
                                No se puede eliminar la materia ${materia} porque no existe
                            </div>
                        </div>
                    </div>
                    `
            }
        }else {
            setInterval(function () {
                document.getElementById('alert').innerHTML = "";
            }, 3000);
            document.getElementById('alert').innerHTML = `
                <div class="col-lg-6 mb-4">
                    <div class="card bg-danger text-white shadow">
                        <div class="card-body">
                            No tienes permisos para eliminar materias
                        </div>
                    </div>
                </div>
                `
        }
    }
}
                

export { getAlumnoInfo, addMateria, deleteMateria }

