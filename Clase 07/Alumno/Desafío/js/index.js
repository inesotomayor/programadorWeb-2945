// Crea una función que permita eliminar un nombre de una lista en el localStorage
// - La función tiene que poder buscar y eliminar un nombre en una lista tipo array almacenada en el localStorage sin importar mayúsculas ni minúsculas. Se provee una lista inicial que podría estar cargada o no, la función tiene que poder verificarlo y no romper si la lista no existe.


var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']


// Cargar localStorage con el array inicial

// 1. Transformar el array en un string JSON:

var stringStudentList = JSON.stringify(studentsList)

// 2. Mandar el JSON a localStorage

localStorage.setItem('studentList', stringStudentList)
console.log('Guardado en localStorage: ' + stringStudentList)


function pasarAMayusculas (studentName) {
    if (typeof studentName === 'string') {
        return studentName.toUpperCase()
    }
}

function buscarNombreAlumno (studentName) {
    var index = -1
    var studentUpperCase = pasarAMayusculas(studentName)
    console.log('Término ingresado: ' + studentUpperCase)

    for (var i = 0; i < studentsList.length; i++) {
        var student = studentsList[i]
        if (student.indexOf(studentUpperCase) !== -1) {
            index = i
            console.log('Nombre eliminado: ' + student + ' / index: ' + index)
            break
        } else {
            console.log('Nombre no encontrado.')
        }
    }
    return index
}

function eliminarNombre () {
    studentName = prompt('Ingrese un nombre para eliminar del listado:')
    var index = buscarNombreAlumno(studentName)

    if (index !== -1) {
        studentsList.splice(index, 1)

        // Borrar localStorage key
        localStorage.removeItem('studentList')

        // Llevar el nuevo array a localStorage como string:
        var stringStudentList = JSON.stringify(studentsList)
        localStorage.setItem('studentList', stringStudentList)

    } else {
        console.log('Nombre no encontrado.')
    }
}

eliminarNombre()