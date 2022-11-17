import { alumnos } from "./data.js";

// Guardar la lista de alumnos en local storage

let alumnosLocal = localStorage.setItem("alumnos", JSON.stringify(alumnos));

export default alumnosLocal;