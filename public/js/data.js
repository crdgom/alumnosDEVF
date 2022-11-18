let profesores = [
    {
        "nombre": "profesor1",
        "password": "1111",
        "permisos": true
    },
    {
        "nombre": "profesor2",
        "password": "2222",
        "permisos": true
    },
    {
        "nombre": "profesor3",
        "password": "3333",
        "permisos": false
    }
]


let alumnos = [

    {
        "id": 1,
        "nombre": "juan",
        "apellido": "alba",
        "edad": "23",
        "materias": [

            "HTML5", 
            "CSS3", 
            "JavaScript", 
            "PHP"
        ],
        "calificaciones": 
            {
                "HTML": 7,
                "CSS": 9,
                "JavaScript": 4,
                "PHP": 5
            }
        
    },
    {   
        "id": 2,
        "nombre": "juan",
        "apellido": "alba",
        "edad": "23",
        "materias": [
            "HTML5", 
            "CSS3", 
            "JavaScript", 
            "PHP"
        ],
        "calificaciones": 
        {
                "HTML": 10,
                "CSS": 10,
                "JavaScript": 10,
                "PHP": 10
        }   
        
    },
]

export {profesores, alumnos}