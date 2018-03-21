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
        firstNameNode.classList.remove('is-invalid')
        firstNameNode.classList.add('is-valid')
    } else {
        firstNameNode.classList.remove('is-valid')
        firstNameNode.classList.add('is-invalid')
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

// VALIDAR DNI:

var dni = document.getElementById('dni')

dni.onblur = function (event) {

    var dniNode = event.target
    var value = dniNode.value
    var valueParsed = parseNumber(value)
    var parentDniNode = dniNode.parentElement
    var dniErrorNode = document.getElementById('dniError')

    if (dniErrorNode) {
        parentDniNode.removeChild(dniErrorNode)
    }

    if (valueParsed && typeof valueParsed === 'number' && valueParsed >= 1) {
        dniNode.classList.remove('is-invalid')
        dniNode.classList.add('is-valid')
    } else {
        dniNode.classList.remove('is-valid')
        dniNode.classList.add('is-invalid')
        dniErrorNode = document.createElement('span')
        dniErrorNode.id = 'dniError'
        dniErrorNode.innerHTML = 'DNI inválido'
        parentDniNode.appendChild(dniErrorNode)
    }
    allowAddButton()
}

// HABILITAR EL BOTÓN DE AGREGAR ALUMNO
function allowAddButton () {
    var addStudentButton = document.getElementById('addStudentButton')
    var validIFields = document.getElementsByClassName('is-valid')
    if (validIFields && validIFields.length === 2) { // Si los 3 campos son válidos
        addStudentButton.disabled = false
    } else {
        addStudentButton.disabled = true
    }
}

// AGREGAR ALUMNO A OBJETO



// AGREGAR ALUMNO A LA LISTA HTML

function addStudentLi (firstName, dni) {

    var mainList = document.getElementById('mainList')
    var dni = document.getElementById('dni')
    var firstName = document.getElementById('firstName')

    var dniValue = dni.value
    var firstNameValue = firstName.value

    var li = document.createElement('li')
    li.className = 'list-group-item '
    li.id = dniValue
    var fullDni = 'DNI: ' + dniValue

    li.innerHTML = '<h1>' + firstNameValue + '</h1><p>' + fullDni

    mainList.appendChild(li)
}

var addStudentButton = document.getElementById('addStudentButton')
addStudentButton.onclick = addStudentLi