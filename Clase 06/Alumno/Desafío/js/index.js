var objectList = [
    { firstName: 'Adrián', lastName: 'Ferré' },
    { firstName: 'Mateo', lastName: 'Molina' },
    { firstName: 'María', lastName: 'Fernández' }
]

// Función que chequea que sea string y cambia a mayúsculas

function changeToUppercase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase()
    }
}
// console.log( changeToUppercase('ioioio') )


// Crear una función que permita buscar un nombre en un array de alumnos

// - La función no debe distinguir mayúsculas de minúsculas.
// - Tiene que poder encontrar coincidencias parciales.
// - Debe encontrar coincidencias en firstName o lastName.
// - En caso de encontrarlo devolver la posición del alumno en el array.


// Búsqueda sin listar resultados

function searchStudentByName (studentName) {
    var index = -1
    var studentUpperCase = changeToUppercase(studentName)

    var flag = true

    for (var i = 0; i < objectList.length; i++) {
        var fullName = objectList[i].firstName + ' ' + objectList[i].lastName
        var fullNameUppercase = changeToUppercase(fullName)

        if (fullNameUppercase.indexOf(studentUpperCase) !== -1) {
            flag = false
            index = i
            console.log('Se encontró el registro: ' + '[' + i + ']' + ' / ' + fullName)
        }
    }
    if (flag) {
        console.log('No hay nombres que contengan "' + studentName + '"')
    }
    return index
}


// Búsqueda + console.log de los resultados:

function searchStudentByNameAndList (studentName) {
    var index = -1
    var studentName = prompt('Ingresar un nombre o parte del mismo')
    var studentUpperCase = changeToUppercase(studentName)

    console.log('Búsqueda: "' + studentName + '"')

    var flag = true

    for (var i = 0; i < objectList.length; i++) {
        var fullName = objectList[i].firstName + ' ' + objectList[i].lastName
        var fullNameUppercase = changeToUppercase(fullName)

        if (fullNameUppercase.indexOf(studentUpperCase) !== -1) {
            flag = false
            index = i
            console.log('[' + i + ']' + ' / ' + fullName)
        }
    }
    if (flag) {
        console.log('No hay nombres que contengan "' + studentName + '"')
    }
    return index
}
// searchStudentByNameAndList()



// Crear una función que permita agregar un alumno a un array

// - Debe recibir como parámetros firstName y lastName.
// - Debe validar que los datos ingresados sean de tipo string no nulo, en caso contrario pedir de nuevo el que corresponda.
// - La función tiene que guardar un objeto alumno de la forma { firstName: 'Adrián', lastName: 'Ferré' }.

function addStudent () {
    var studentFirstName
    var studentLastName

    do {
        studentFirstName = prompt('Ingrese un nombre:')
    } while (!studentFirstName)

    do {
        studentLastName = prompt('Ingrese el apellido:')
    } while (!studentLastName)

    for (var i = 0; i < objectList.length; i++) {
        this.firstName = objectList[i].firstName
        this.lastName = objectList[i].lastName
    }

    var newObj = {}
    newObj['firstName'] = studentFirstName
    newObj['lastName'] = studentLastName
    objectList.push(newObj)

    console.log('Se agregó el nombre "' + studentFirstName + ' ' + studentLastName + '"')
}
// addStudent()
// console.log(objectList)




// Crear una función que permita eliminar un nombre de un array de alumnos

// - La función debe recibir como parámetro un nombre, buscarlo y eliminarlo del array.
// - La función no debe distinguir mayúsculas de minúsculas.


function deleteOneStudent () {

    // Eliminar el primer nombre que encuentre:

    var index = -1
    var studentName = prompt('Ingrese un nombre (o parte del mismo) para eliminarlo del listado')
    var index = searchStudentByName(studentName)

    if (index !== -1) {

        objectList.splice(index, 1)
        console.log('Se eliminó el primer registro que contiene: "' + studentName + '"')
    } else {
        console.log('No se encontró ningún alumno con: "' + studentName + '"')
    }
    console.log(index)

}


// Crear una función que permita gestionar un array de alumnos
// - Las opciones pueden ser buscar, agregar o eliminar y tienen que pedir los datos que correspondan y usar las funciones que sean necesarias del ejercicio anterior.

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
            searchStudentByNameAndList()
            break
        case 'AGREGAR':
            addStudent()
            console.log('Array actualizado: ', objectList)
            break
        case 'ELIMINAR':
            deleteOneStudent()
            console.log('Array actualizado: ', objectList)
            break
        default:
            console.log('Elija una opción válida')
            manageStudents(true)
            break
    }
}

manageStudents()