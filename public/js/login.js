// 
function login(){
    try{
        let user = document.getElementById('inputName').value;
    console.log("el usuario escrito en el formulario es ", user);
    let password = document.getElementById('inputPassword').value;
    console.log("el password escrito en el formulario es ", password);
    let loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function (e) {
        e.preventDefault();
    });

    // recuperar la información de sessionStorage

    let recoverData = JSON.parse(sessionStorage.getItem('profesores'));
    console.log("la data es" ,recoverData);

    // comparar la información del formulario con la información de sessionStorage

    for (let i = 0; i < recoverData.length; i++) {
        if (user === recoverData[i].nombre && password === recoverData[i].password) {
            
            let permisos = recoverData[i].permisos;
        // almacenar el user en sesión storage

            sessionStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('permisos', JSON.stringify(permisos));
            
            // borrar recoverData de sesión storage

            sessionStorage.removeItem('profesores');

            // redirection a la pagina de alumnos

            window.location.href = "http://127.0.0.1:5500/public/dashboard.html";

            alertInvalidName.classList.remove('alertInvalidName');

        }else{
            // mostrar mensaje de erro en el formulario

            let alertInvalidName = document.getElementById('alertInvalidName');
            alertInvalidName.classList.remove('alertInvalidName');
            setInterval(function () {
                alertInvalidName.classList.add('alertInvalidName');
            }, 3000);

        }
    }
    }
    catch(e){
        console.log(e);
    }

    
}



export default login;
    

