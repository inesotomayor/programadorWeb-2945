var alumnos = [
    {
        firstName: 'Laura',
        lastName: 'Lopez',
        dni: 21678988,
        address: {
            street: 'Cucha cucha',
            number: 1234
        },
        examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
    },
    {
        firstName: 'Cooper',
        lastName: 'Marshall',
        dni: 38678985,
        address: {
            street: 'La Pampa',
            number: 6754
        },
        examResults: [ 3, 4, 5, 6, 7, 3, 4, 5 ]
    },
    {
        firstName: 'Ines',
        lastName: 'Sotomayor',
        dni: 20678944,
        address: {
            street: 'La vía',
            number: 3737
        },
        examResults: [ 3, 8, 7, 5, 6, 4, 5, 4, 3 ]
    },
    {
        firstName: 'Matias',
        lastName: 'Trunzo',
        dni: 16678900,
        address: {
            street: 'Zapiol',
            number: 1819
        },
        examResults: [ 4, 3, 4, 5, 5, 3 ]
    },
    {
        firstName: 'Pablo',
        lastName: 'Callegari',
        dni: 40678921,
        address: {
            street: 'Juan b. Justo',
            number: 7654
        },
        examResults: [ 1, 2, 1, 3, 2, 4, 2, 4, 5 ]
    },
    {
        firstName: 'Daniela',
        lastName: 'Picciotto',
        dni: 48678966,
        examResults: [ 10, 8, 9, 7, 8, 7, 10 ]
    }
]

function cambiarAMayusculas (nombre) {
    if (typeof nombre === 'string') {
        return nombre.toUpperCase()
    }
}

function promediarNotas (examResults) {
    var total = 0
    for (var i = 0; i < examResults.length; i++) {
        var result = examResults[i]
        total = total + result
    }

    return total / examResults.length
}

function buscarAlumno (nombre) {

    nombre = prompt('Ingrese un nombre para eliminar del listado:')

    var index = -1
    var nombreEnMayusculas = cambiarAMayusculas(nombre)
    console.log('Término ingresado: "' + nombre + '"')

    var flag = true

    for (var i = 0; i < alumnos.length; i++) {
        var alumno = alumnos[i]
        var id = alumno.dni
        if (
            alumno.firstName.toUpperCase().indexOf(nombreEnMayusculas) !== -1 ||
            alumno.lastName.toUpperCase().indexOf(nombreEnMayusculas) !== -1
        ) {
            index = i
            console.log('Alumno eliminado: ' + alumno.firstName + ' ' + alumno.lastName + ' / ' + 'ID: ' + id + ' / Index: [' + index + ']')
            flag = false
            break
        }
    }

    if (flag) {
        console.log('Nombre no encontrado.')
    }
    return {
        id: id,
        index: index
    }
}

function mostrarAlumnos (alumnos) {
    var alumno
    var rootContainer = document.getElementById('root')
    rootContainer.innerHTML = '<ul class="list-group" id="list"></ul>'
    var listContainer = document.getElementById('list')
    for (var i = 0; i < alumnos.length; i++) {
        alumno = alumnos[i]

        var liAlumno = crearAlumnoLi(
            alumno.firstName,
            alumno.lastName,
            alumno.dni,
            alumno.examResults
        )
        listContainer.appendChild(liAlumno)
    }
}

function crearAlumnoLi (firstName, lastName, dni, examResults) {

    var li = document.createElement('li')
    li.className = 'list-group-item '
    li.id = dni
    var fullName = firstName + ' ' + lastName
    var fullDni = 'DNI: ' + dni
    var prom = 'Promedio: ' + promediarNotas(examResults)

    li.innerHTML =
        '<h1>' + fullName + '</h1><p>' + fullDni + '</p><p>' + prom + '</p>'

    return li
}

mostrarAlumnos(alumnos)

function borrarAlumno (nombre) {
    var alumno = buscarAlumno(nombre)
    var index = alumno.index
    var id = alumno.id
    if (index !== -1) {

        // Borrar del array:
        alumnos.splice(index, 1)

        // Borrar del <ul>:
        console.log('ID a borrar: ' + id)
        var listContainer = document.getElementById('list')
        var liBorrado = document.getElementById(id)
        listContainer.removeChild(liBorrado)
    } else {
        console.log('No se borró ningún registro.')
    }
}

borrarAlumno ()