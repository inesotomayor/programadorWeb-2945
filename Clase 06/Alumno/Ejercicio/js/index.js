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

function deleteStudent (studentName) {
    // studentName = prompt('Ingrese un nombre para eliminar del array')
    // var index = searchStudentByName(studentName)
    // if (index !== -1) {
    //     studentsList.splice(index, 1)
    //     console.log('Se eliminó el nombre que contiene: ' + studentName)
    // }
    var index = -1
    var studentName = prompt('Ingresar un nombre (o parte del mismo) para eliminarlo del listado')
    var index = searchStudentByName(studentName)

    var flag = true

    for (var i = 0; i < studentsList.length; i++) {
        if (index !== -1) {
            studentsList.splice(index, 1)
            console.log('Se eliminaron los alumnos cuyo nombre contiene: "' + studentName + '"')
            flag = false
            // PREGUNTA: ¿Cómo hago para listar en console.log todos los nombres que se eliminaron?
        }
    }
    if (flag) {
        console.log('No hay nombres que contengan el término "' + studentName + '"')
    }
    return index
}
// deleteStudent()
// console.log(studentsList)




// Crear una función que permita gestionar un array de alumnos

// - Las opciones pueden ser buscar, agregar o eliminar y tienen que pedir los datos que correspondan y usar las funciones anteriores para hacer los cambios.

function manageStudents () {

    var flag = true

    do {
        var selectedOption = prompt('Ingrese una opción: buscar, agregar o eliminar')
        var selectedOptionUppercase = changeToUppercase(selectedOption)

        if (selectedOptionUppercase === 'BUSCAR' || selectedOptionUppercase === 'AGREGAR' || selectedOptionUppercase === 'ELIMINAR') {
            switch (selectedOptionUppercase) {
                case 'BUSCAR':
                    searchStudentByNameandList()
                    break
                case 'AGREGAR':
                    addStudent()
                    console.log('Array actualizado: ', studentsList)
                    break
                case 'ELIMINAR':
                    deleteStudent()
                    console.log('Array actualizado: ', studentsList)
                    break
                default:
                    console.log('Opción inválida')
            }
            flag = false
        } else {
            console.log('Elija una opción válida')
            // PREGUNTA: ¿Cómo hago para hacer un prompt de un mensaje diferente al inicial acá y que lo vuelva a validar? Ejemplo:
            // var selectAValidOption = prompt('Ingrese una opción válida: buscar, agregar o eliminar')
        }
    } while (flag)
}

manageStudents()
