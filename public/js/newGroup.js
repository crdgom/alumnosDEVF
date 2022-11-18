function addGroup() {
    let nombreGrupo = document.getElementById('nuevoGrupo').value.toUpperCase();
    let profesor = JSON.parse(sessionStorage.getItem('user'));
    let permisos = JSON.parse(sessionStorage.getItem('permisos'));

    if (profesor === profesor && permisos === true) {
        let grupo = nombreGrupo

        // revisar si el grupo ya existe en el localStorage
        if (localStorage.getItem('grupos') === null) {
            let grupos = [];
            grupos.push(grupo);
            localStorage.setItem('grupos', JSON.stringify(grupos));
        } else {
            let grupos = JSON.parse(localStorage.getItem('grupos'));
            if (grupos.includes(grupo)) {
                setInterval(function () {
                    document.getElementById('alert').innerHTML = "";
                }, 3000);
                document.getElementById('alert').innerHTML = `
                                    <div class="col-lg-6 mb-4">
                                        <div class="card bg-warning text-white shadow">
                                            <div class="card-body">
                                            El grupo ya existe
                                            </div>
                                        </div>
                                    </div>
                                    `
            } else {
            grupos.push(grupo);
            localStorage.setItem('grupos', JSON.stringify(grupos));
            setInterval(function () {
                document.getElementById('alert').innerHTML = "";
            }, 3000);
            document.getElementById('alert').innerHTML = `
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-success text-white shadow">
                                        <div class="card-body">
                                            Grupo creado correctamente
                                        </div>
                                    </div>
                                </div>
                                `
            }
        }
        
    } else {
        setInterval(function () {
            document.getElementById('alert').innerHTML = "";
        }, 3000);
        document.getElementById('alert').innerHTML = `
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-danger text-white shadow">
                                    <div class="card-body">
                                        No tienes permisos para crear grupos
                                    </div>
                                </div>
                            </div>
                            `
        alert("No tienes permisos para crear un grupo");
        
    }
}

export default addGroup;