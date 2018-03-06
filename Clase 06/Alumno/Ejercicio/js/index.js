// indexOf
// Para string o array: encuentra la primera aparición dentro del string/array. Si no encuentra nada devuelve -1:

// En un string busca el caracter:
// var testString = studentsList[0].indexOf('A')
// console.log('Index en el string: ' + testString)

// En un array busca la palabra completa:
// var testArray = studentsList.indexOf('MARIA')
// console.log('Index en del array: ' + testArray)

var studentsList = [
    'CARLOS',
    'GERONIMO',
    'NICOLAS',
    'LUCAS',
    'MARIA',
    'FEDERICO',
    'ANTONIO',
    'LORNA',
    'JULIAN',
    'DIEGO',
    'DANIELA',
    'JUAN',
    'MATEO',
    'BARBARA',
    'AGUSTIN',
    'MARIO',
    'MARIEL',
    'ANA',
    'FLORENCIA'
]




// Crear una función que cambie a mayúsculas

// - La función recibe como parámetro un nombre de un alumno y debe devolverlo en mayúsculas.

function changeToUppercase (studentName) {
    if (typeof studentName === 'string') {
        return studentName.toUpperCase()
    }
}



// Crear una función que busque un alumno en un array de alumnos

// - La función no debe distinguir mayúsculas de minúsculas.
// - Tiene que poder encontrar coincidencias parciales.
// - En caso de encontrarlo devolver la posición del alumno en el array.


function searchStudentByName (studentName) {
    var index = -1
    var studentUpperCase = changeToUppercase(studentName)

    for (var i = 0; i < studentsList.length; i++) {
        var student = studentsList[i]
        if (student.indexOf(studentUpperCase) !== -1) {
            index = i
            break
        }
    }
    return index
}


// Alternativa para el último ejercicio: función de búsqueda + console.log de los resultados:

function searchStudentByNameandList (studentName) {
    var index = -1
    var studentName = prompt('Ingresar un nombre o parte del mismo')
    var studentUpperCase = changeToUppercase(studentName)

    console.log('Búsqueda realizada: "' + studentName + '"')

    var flag = true

    for (var i = 0; i < studentsList.length; i++) {
        var student = studentsList[i]
        if (student.indexOf(studentUpperCase) !== -1) {
            index = i
            console.log(studentsList[i])
            flag = false
        }
    }
    if (flag) {
        console.log('No hay nombres que contengan el término "' + studentName + '"')
    }
    return index
}
// searchStudentByName()





// Crear una función que permita agregar un alumno a un array

// - Debe validar que el dato ingresado sea un string no nulo, en caso contrario pedirlo de nuevo.
// - La función tiene que guardar el nombre del alumno en mayúsculas.

function addStudent () {
    var studentName

    do {
        studentName = prompt('Ingrese un nombre para agregar al array')
    } while (!studentName)

    var studentUpperCase = changeToUppercase(studentName)
    studentsList.push(studentUpperCase)
    console.log('Se agregó el nombre: ' + studentName)
}
// addStudent()
// console.log(studentsList)




// Crear una función que permita eliminar un nombre de un array de alumnos

// - La función debe recibir como parámetro un nombre, buscarlo y eliminarlo del array.
// - La función no debe distinguir mayúsculas de minúsculas.


function deleteOneStudent () {

    // Eliminar el primer nombre que encuentre:

    var index = -1
    var studentName = prompt('Ingrese un nombre (o parte del mismo) para eliminarlo del listado')
    var index = searchStudentByName(studentName)

    if (index !== -1) {
        studentsList.splice(index, 1)
        console.log('Se eliminó el primer alumno cuyo nombre contiene: "' + studentName + '"')
    } else {
        console.log('No se encontró ningún alumno con: "' + studentName + '"')
    }
}
// deleteOneStudent()
// console.log(studentsList)

// function deleteAllStudents () {
//     var studentName = prompt('Ingrese un nombre (o parte del mismo) para eliminarlos del listado')
//
//     var deletedAStudents = []
//
//     for (var i = 0; i < studentsList.length; i++) {
//         var student = studentsList[i]
//
//         if (student.indexOf(studentName) !== -1) {
//
//             deletedAStudents.push(student)
//
//             studentsList.splice(i, 1)
//             console.log('Se eliminaron los alumnos cuyo nombre contienen: "' + studentName + '"')
//             i--
//         } else {
//             console.log('No hay nombres que contengan el término "' + studentName + '"')
//         }
//     }
//     for (var i = 0; i < deletedAStudents.length; i++) {
//         console.log('Los estudiantes eliminados son: ', deletedAStudents[i])
//     }
// }
// deleteAllStudents()
// console.log(studentsList)


// function deleteStudent () {

    // Código fallido para borrar todos lo nombres que encuentre:

    // var studentName = prompt('Ingresar un nombre (o parte del mismo) para eliminarlo del listado')
    // var index = searchStudentByName(studentName)
    //
    // var flag = true
    //
    // for (var i = 0; i < studentsList.length; i++) {
    //     if (index !== -1) {
    //         studentsList.splice(index, 1)
    //         console.log('Se eliminaron los alumnos cuyo nombre contienen: "' + studentName + '"')
    //         flag = false
    //         // PREGUNTA: ¿Cómo hago para listar en console.log todos los nombres que se eliminaron?
    //     }
    // }
    // if (flag) {
    //     console.log('No hay nombres que contengan el término "' + studentName + '"')
    // }
    // return index
// }
// deleteStudent()
// console.log(studentsList)




// Crear una función que permita gestionar un array de alumnos

// - Las opciones pueden ser buscar, agregar o eliminar y tienen que pedir los datos que correspondan y usar las funciones anteriores para hacer los cambios.

function manageStudents (isSecondCall) {

    var message
    if (!isSecondCall) {
        message = 'Ingrese una opción: buscar, agregar o eliminar'
    } else {
        message = 'Opción inválida, use: buscar, agregar o eliminar'
    }

    var selectedOption = prompt(message)
    var selectedOptionUppercase = changeToUppercase(selectedOption)

    switch (selectedOptionUppercase) {
        case 'BUSCAR':
            searchStudentByNameandList()
            break
        case 'AGREGAR':
            addStudent()
            console.log('Array actualizado: ', studentsList)
            break
        case 'ELIMINAR':
            deleteOneStudent()
            console.log('Array actualizado: ', studentsList)
            break
        default:
            console.log('Elija una opción válida')
            manageStudents(true)
            break
    }
}

manageStudents()
