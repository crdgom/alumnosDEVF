    let alumnosData = localStorage.getItem("students");

    console.log("alumnosData", alumnosData);

    function getEachStudent() {

        try {
            
            let alumnos = JSON.parse(alumnosData);
            console.log("alumnos", alumnos);
            alumnos.forEach((alumno) => {
                console.log("alumno", alumno);
                let materia = Object.keys(alumno.materias);
                console.log("materia", materia);
                let calificaciones = Object.values(alumno.calificaciones);
                console.log("calificaciones", calificaciones);
                let promedio = calificaciones.reduce((a, b) => a + b) / calificaciones.length;
                console.log("promedio", promedio);
                let promedioAlumno = document.getElementById('promedioAlumno');
                promedioAlumno.innerHTML = promedio;

            });
        }catch{
            alert("Error al obtener alumnos");
        }
    }

    getEachStudent();



