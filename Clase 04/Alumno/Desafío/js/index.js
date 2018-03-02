// Crear una función que permita buscar alumnos por promedio
// La función tiene que recibir como parámetro un número y mostrar en consola todos los datos de los alumnos
// con promedio igual o mayor al número recibido.

var alumnos = [
    {
        firstName: 'Cooper',
        lastName: 'Marshall',
        dni: 45678989,
        address:{
            street: 'La Pampa',
            number: 6754
        },
        examResults: [ 3, 4, 5, 6, 7, 3, 4, 5 ]
    },
    {
        firstName: 'Laura',
        lastName: 'Lopez',
        dni: 45678987,
        address:{
            street: 'Cucha cucha',
            number: 1234
        },
        examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
    },
    {
        firstName: 'Ines',
        lastName: 'Sotomayor',
        dni: 45678956,
        address:{
            street: 'La vía',
            number: 3737
        },
        examResults: [ 3, 8, 7, 5, 6, 4, 5, 4, 3 ]
    },
    {
        firstName: 'Matias',
        lastName: 'Trunzo',
        dni: 45678943,
        address:{
            street: 'Zapiola',
            number: 1819
        },
        examResults: [ 4, 3, 4, 5, 5, 3 ]
    },
    {
        firstName: 'Pablo',
        lastName: 'Callegari',
        dni: 45678963,
        address:{
            street: 'Juan b. Justo',
            number: 7654
        },
        examResults: [ 1, 2, 1, 3, 2, 4, 2, 4, 5 ]
    },
    {
        firstName: 'Daniela',
        lastName: 'Picciotto',
        dni: 45678983,
        examResults: [ 10, 8, 9, 7, 8, 7, 10 ]
    }
]


// Chequear número válido

function verificarNumero() {
    if (isNaN(promedioIngresado)) {
        return false
    } else {
        return promedioIngresado
    }
}


// Sacar promedio

function promediarNotas(examResults) {
    var cantidadNumeros = examResults.length
    var total = 0
    for (var i = 0; i < examResults.length; i++) {
        total = total + examResults[i]
    }
    return total / cantidadNumeros
}


// Mostrar datos alumnos

function mostrarDetalleAlumno(alumno) {
    var street = alumno.address && alumno.address.street
    var streetNumber = alumno.address && alumno.address.number
    var fullName = alumno.firstName + ' ' + alumno.lastName
    var address = 'Dirección: ' + street + ' ' + streetNumber
    var dni = 'DNI: ' + alumno.dni
    var promedioStudent = 'Promedio: ' + promediarNotas(alumno.examResults)
    console.log(fullName + ' / ' + dni + ' / ' + address + ' / ' + promedioStudent)
}

// Separar todos los alumnos con promedio mayor o igual al ingresado

function separarPromediosMayores() {
    for (var i = 0; i < alumnos.length; i++) {
        var alumno = alumnos[i]
        var promedio = promediarNotas(alumno.examResults)
        mostrarDetalleAlumno(alumno)
    }
}


// Buscar promedio igual o mayor y mostrar detalles

var promedioIngresado = prompt('Ingresá un promedio:')
promedioIngresado = verificarNumero()

if (promedioIngresado !== false) {
    console.log('Promedios mayores a ' + promedioIngresado + ':')

    function buscarPromedioIgualMayor(promedioIngresado) {
        for (var i = 0; i < alumnos.length; i++) {
            var alumno = alumnos[i]
            var promedio = promediarNotas(alumno.examResults)

            if (promedio >= promedioIngresado) {
                mostrarDetalleAlumno(alumno)
                // break
            }  else {
                console.log('No hay ningún promedio igual o mayor a ' + promedioIngresado)
            }
        }
    }

    buscarPromedioIgualMayor(promedioIngresado)

} else {
    console.log('Ingrese un número válido')
}




// Crear una función que busque un alumno
// Debe recibir como parámetro un texto y buscarlo en el nombre o el apellido de un array de alumnos
// (El array debe estar en el scope global), al encontrarlo
// usar la función anterior para mostrar todos los datos del estudiante.

var name = prompt('Ingresá el nombre o apellido de alumno:')
buscarAlumnoPorNombreOApellido(name)

function buscarAlumnoPorNombreOApellido(nombreIngresado) {
    for (var i = 0; i < alumnos.length; i++) {
        var alumno = alumnos[i]
        if (nombreIngresado === alumno.firstName || nombreIngresado === alumno.lastName) {
            mostrarDetalleAlumno(alumno)
            // break
        } else {
            console.log('No hay ningún alumno con nombre o apellido ' + nombreIngresado)
        }
    }
}









