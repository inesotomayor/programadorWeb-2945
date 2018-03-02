// Crear una función que calcule el promedio de un array
// - Debe recibir como parámetro un array de números y devolver el calculo del promedio de todos los números.
// - Ejemplo: var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]



// Llamada de la función arriba de la misma

var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]
var promedio = promediarNotas(examResults)
console.log('El promedio es: ' + promedio)

// Función

function promediarNotas(examResults) {
    var cantidadNumeros = examResults.length
    //console.log('La cantidad de números es: ' + cantidadNumeros)
    var total = 0
    for (var i = 0; i < examResults.length; i++) {
        total = total + examResults[i]
        // Una forma abreviada: 'total += examResults[i]'
        //console.log('La suma de todos los números es: ' + total)
    }
    return total / cantidadNumeros
}



// Crear una función que muestre en consola un alumno
// - Debe recibir como parámetro un objeto alumnos y mostrar en consola todos los datos, nombre, apellido, edad y promedio.
// - Deberá usar la función anterior para calcular el promedio de cada uno y mostrarlo junto con el nombre.
// - Ej: 1. Laura, Lopez, DNI:45678987, Promedio: 5, Dirección: Cucha cucha 1234


var student = {
    firstName: 'Laura',
    lastName: 'Lopez',
    dni: 45678987,
    address:{
        street: 'Cucha Cucha',
        number: 1234
    },
    examResults: [ 8, 6, 8, 6, 8, 6 ]
}


// Crear una función que permita buscar un alumno
// Debe recibir como parámetro un nombre y buscarlo en un array de alumnos (El array debe estar en el scope global), al encontrarlo usar la función anterior para mostrar todos los datos del estudiante.



var alumnos = [
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


function showStudentDetail(student) {
    var street = student.address && student.address.street
    var streetNumber = student.address && student.address.number
    var fullName = 'Nombre: ' +  student.firstName + ' ' + student.lastName
    var address = 'Dirección: ' + street + ' ' + streetNumber
    var dni = 'DNI: ' + student.dni
    var promedioStudent = 'Promedio: ' + promediarNotas(student.examResults)
    console.log(fullName + ' / ' + dni + ' / ' + address + ' / ' + promedioStudent)
}
showStudentDetail(student)


var name = prompt('Ingresá el nombre de alumno:')
buscarAlumnoPorNombre(name)
// buscarAlumnoPorNombre('Pablo')
// buscarAlumnoPorNombre('PEPE')

function buscarAlumnoPorNombre (nombreAlumno) {
    for (var i = 0; i < alumnos.length; i++) {
        var alumno = alumnos[i]
        if (alumno.firstName === nombreAlumno) {
            showStudentDetail(alumno)
            break
        }
    }
}