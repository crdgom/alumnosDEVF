function addGroup() {
    let nombreGrupo = document.getElementById('nombreGrupo').value;
    console.log(nombreGrupo);
    let profesor = JSON.parse(sessionStorage.getItem('user'));
    console.log(profesor);
    let permisos = JSON.parse(sessionStorage.getItem('permisos'));
    console.log(permisos);

    if (permisos !== true) {
        alert("No tienes permisos para crear un grupo");
    } else {
        let grupo = {
            nombreGrupo: nombreGrupo,
        }
        
        let grupos = JSON.parse(localStorage.getItem('grupos'));
        if (grupo === null) {
            grupos = [];
        } else {
        grupos.push(grupo);
        localStorage.setItem('grupos', JSON.stringify(grupo));
        console.log(grupos);
        }
}
}

export default addGroup;