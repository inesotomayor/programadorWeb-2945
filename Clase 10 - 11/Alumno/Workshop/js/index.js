// VALIDAR NOMBRE:

var firstName = document.getElementById('firstName')

firstName.onblur = function (event) {

    var firstNameNode = event.target
    var value = firstNameNode.value
    var parentFirstNameNode = firstNameNode.parentElement
    var firstNameErrorNode = document.getElementById('firstNameError')

    if (firstNameErrorNode) {
        parentFirstNameNode.removeChild(firstNameErrorNode)
    }

    if (value && typeof value === 'string') {
        showValidInput(firstNameNode)
    } else {
        showInvalidInput(firstNameNode)
        firstNameErrorNode = document.createElement('span')
        firstNameErrorNode.id = 'firstNameError'
        firstNameErrorNode.innerHTML = 'Completar el nombre'
        parentFirstNameNode.appendChild(firstNameErrorNode)
    }
    allowAddButton()
}

// PARSEAR NÚMERO:

function parseNumber(number) {
    var parsedNumber = parseInt(number, 10)
    if (isNaN(parsedNumber)) {
        return false
    } else {
        return parsedNumber
    }
}

// VALIDAR DNI (AGREGAR):

var dni = document.getElementById('dni')

dni.onblur = function (event) {

    var dniNode = event.target
    var value = dniNode.value
    var dniParsed = parseNumber(value)
    var parentDniNode = dniNode.parentElement
    var dniErrorNode = document.getElementById('dniError')

    if (dniErrorNode) {
        parentDniNode.removeChild(dniErrorNode)
    }

    if (dniParsed && typeof dniParsed === 'number' && dniParsed >= 1) {
        showValidInput(dniNode)
    } else {
        showInvalidInput(dniNode)
        dniErrorNode = document.createElement('span')
        dniErrorNode.id = 'dniError'
        dniErrorNode.innerHTML = 'DNI inválido. '
        parentDniNode.appendChild(dniErrorNode)
    }

    for (var i = 0; i < studentList.length; i++) {
        var alumno = studentList[i]
        var dni = alumno.dni
        if (dni.indexOf(value) > -1 && alumno.dni === value) {
            showInvalidInput(dniNode)
            dniErrorNode = document.createElement('span')
            dniErrorNode.id = 'dniError'
            dniErrorNode.innerHTML = 'DNI repetido, ingrese uno nuevo. '
            parentDniNode.appendChild(dniErrorNode)
        }
    }

    allowAddButton()
}




// VALIDAR DNI (BORRAR):

var deleteDni = document.getElementById('deleteDni')

deleteDni.onblur = function (event) {
    var deleteDniNode = event.target
    var value = deleteDniNode.value

    for (var i = 0; i < studentList.length; i++) {
        var alumno = studentList[i]
        var dni = alumno.dni
        if (dni.indexOf(value) !== -1 && alumno.dni === value) {
            showValidInput(deleteDniNode)
            break
        } else {
            showInvalidInput(deleteDniNode)
        }
    }

    allowDeleteButton()

}


// HABILITAR EL BOTÓN DE AGREGAR ALUMNO

function allowAddButton () {
    var addStudentButton = document.getElementById('addStudentButton')
    var validFields = document.getElementsByClassName('is-valid')
    if (firstName.classList.contains('is-valid') && dni.classList.contains('is-valid')) { // Si los 2 campos son válidos
        addStudentButton.disabled = false
    } else {
        addStudentButton.disabled = true
    }
}


// HABILITAR EL BOTÓN DE BORRAR ALUMNO

function allowDeleteButton () {
    var deleteStudentButton = document.getElementById('deleteStudentButton')
    var deleteDni = document.getElementById('deleteDni')
    if (deleteDni.classList.contains('is-valid')) { // Si el input de DNI es válido
        deleteStudentButton.disabled = false
    } else {
        deleteStudentButton.disabled = true
    }
}


// AGREGAR ALUMNO AL ARRAY + LOCAL STORAGE

var studentList = []
function agregarAlumno (firstName, dni) {
    studentList.push({"firstName": firstName, "dni": dni})
    var stringStudentList = JSON.stringify(studentList)
    localStorage.setItem('students', stringStudentList)
    console.log(studentList)
}


// AGREGAR ALUMNO A LA LISTA HTML

function addStudentLi (firstName, dni) {

    var mainList = document.getElementById('mainList')
    dni = document.getElementById('dni')
    firstName = document.getElementById('firstName')
    var dniValue = dni.value
    var firstNameValue = firstName.value

    var li = document.createElement('li')
    li.className = 'list-group-item '
    li.id = dniValue
    var fullDni = 'DNI: ' + dniValue

    li.innerHTML = '<h1>' + firstNameValue + '</h1><p>' + fullDni

    mainList.appendChild(li)
    agregarAlumno(firstNameValue, dniValue)
    resetAllInputs()
}


// BORRAR ALUMNO

function borrarAlumno (value) {

    var mainList = document.getElementById('mainList')
    deleteDni = document.getElementById('deleteDni')

    for (var i = 0; i < studentList.length; i++) {
        var alumno = studentList[i]
        var dni = alumno.dni
        var value = deleteDni.value

        if (dni.indexOf(value) > -1 && alumno.dni === value) {
            // Borrar del array y updatear local storage:
            studentList.splice(i, 1)
            var stringStudentList = JSON.stringify(studentList)
            localStorage.setItem('students', stringStudentList)

            // Borrar del <ul>:
            var mainList = document.getElementById('mainList')
            dni = document.getElementById('dni')
            var liBorrado = document.getElementById(value)
            mainList.removeChild(liBorrado)
        }
    }
    resetAllInputs()
}




// AGREGAR AL CLICK:

var addStudentButton = document.getElementById('addStudentButton')
addStudentButton.onclick = addStudentLi


// BORRAR AL CLICK:

var deleteStudentButton = document.getElementById('deleteStudentButton')
deleteStudentButton.onclick = borrarAlumno



function resetAllInputs () {
    firstName.value = ''
    firstName.classList.remove('is-valid')
    firstName.classList.remove('is-invalid')
    dni.value = ''
    dni.classList.remove('is-valid')
    dni.classList.remove('is-invalid')
    addStudentButton.disabled = true
    deleteDni.value = ''
    deleteDni.classList.remove('is-valid')
    deleteDni.classList.remove('is-invalid')
    deleteStudentButton.disabled = true
}

function showValidInput (inputNode) {
    if (inputNode && inputNode.classList) {
        inputNode.classList.remove('is-invalid')
        inputNode.classList.add('is-valid')
    }
}

function showInvalidInput (inputNode) {
    if (inputNode && inputNode.classList) {
        inputNode.classList.remove('is-valid')
        inputNode.classList.add('is-invalid')
    }
}