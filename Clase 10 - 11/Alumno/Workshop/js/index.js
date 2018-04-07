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


// VALIDAR APELLIDO:

var lastName = document.getElementById('lastName')

lastName.onblur = function (event) {

    var lastNameNode = event.target
    var value = lastNameNode.value
    var parentlastNameNode = lastNameNode.parentElement
    var lastNameErrorNode = document.getElementById('lastNameError')

    if (lastNameErrorNode) {
        parentlastNameNode.removeChild(lastNameErrorNode)
    }

    if (value && typeof value === 'string') {
        showValidInput(lastNameNode)
    } else {
        showInvalidInput(lastNameNode)
        lastNameErrorNode = document.createElement('span')
        lastNameErrorNode.id = 'lastNameError'
        lastNameErrorNode.innerHTML = 'Completar el apellido'
        parentlastNameNode.appendChild(lastNameErrorNode)
    }
    allowAddButton()
}



// VALIDAR E-MAIL:

var email = document.getElementById('email')

email.onblur = function (event) {

    var emailNode = event.target
    var value = emailNode.value
    var parentemailNode = emailNode.parentElement
    var emailErrorNode = document.getElementById('emailError')

    if (emailErrorNode) {
        parentemailNode.removeChild(emailErrorNode)
    }

    if (value && typeof value === 'string' && value.indexOf('@') > -1 && value.indexOf('.') > -1) {
        showValidInput(emailNode)
    } else {
        showInvalidInput(emailNode)
        emailErrorNode = document.createElement('span')
        emailErrorNode.id = 'emailError'
        emailErrorNode.innerHTML = 'Ingrese un e-mail valido.'
        parentemailNode.appendChild(emailErrorNode)
    }
    allowAddButton()
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
    if (firstName.classList.contains('is-valid') && lastName.classList.contains('is-valid') && dni.classList.contains('is-valid') && email.classList.contains('is-valid')) { // Si los 4 campos son válidos
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


// HABILITAR EL BOTÓN DE BUSCAR

function allowSearchButton () {
    var searchStudentButton = document.getElementById('searchStudentButton')
    var searchText = document.getElementById('searchText')
    if (searchText.classList.contains('is-valid')) { // Si el input de buscar es válido
        searchStudent.disabled = false
    } else {
        searchStudent.disabled = true
    }
}


// AGREGAR ALUMNO AL ARRAY + LOCAL STORAGE

var studentList = []
function agregarAlumno (firstName, lastName, dni, email) {
    studentList.push({"firstName": firstName, "lastName": lastName, "dni": dni, "email": email})
    var stringStudentList = JSON.stringify(studentList)
    localStorage.setItem('students', stringStudentList)
    console.log(studentList)
}


// AGREGAR ALUMNO A LA LISTA HTML

function addStudentLi (firstName, lastName, dni, email) {
    var mainList = document.getElementById('mainList')
    var dni = document.getElementById('dni')
    var firstName = document.getElementById('firstName')
    var lastName = document.getElementById('lastName')
    var email = document.getElementById('email')
    var dniValue = dni.value
    var firstNameValue = firstName.value
    var lastNameValue = lastName.value
    var emailValue = email.value

    var li = document.createElement('li')
    li.className = 'list-group-item '
    li.id = dniValue
    var fullDni = 'DNI: ' + dniValue

    li.innerHTML = '<h1>' + firstNameValue + '</h1><h2>' + lastNameValue +  '</h2><p>' + fullDni + '<br>' + emailValue + '</p>'

    mainList.appendChild(li)
    agregarAlumno(firstNameValue, lastNameValue, dniValue, emailValue)
    resetAllInputs()
}

// // AGREGAR ALUMNO A LA LISTA DE BÚSQUEDA
//
// function addStudentSearchLi (firstName, lastName, dni, email) {
//     var searchList = document.getElementById('searchList')
//     var dni = document.getElementById('dni')
//     var firstName = document.getElementById('firstName')
//     var lastName = document.getElementById('lastName')
//     var email = document.getElementById('email')
//     var dniValue = dni.value
//     var firstNameValue = firstName.value
//     var lastNameValue = lastName.value
//     var emailValue = email.value
//
//     var li = document.createElement('li')
//     li.className = 'list-group-item '
//     li.id = dniValue
//     var fullDni = 'DNI: ' + dniValue
//     li.innerHTML = '<h1>' + firstNameValue + '</h1><h2>' + lastNameValue +  '</h2><p>' + fullDni + '<br>' + emailValue + '</p>'
//
//     searchList.appendChild(li)
//     agregarAlumno(firstNameValue, lastNameValue, dniValue, emailValue)
// }


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


// HACER BÚSQUEDA

function buscarNombre () {

    var searchList = document.getElementById('searchList')
    var searchText = document.getElementById('searchText')
    var searchTextValue = searchText.value

    var index = buscar(searchTextValue)

    searchList.innerHTML = ''

    if (index !== -1) {
        var i = index
        var alumno = studentList[i]
        var firstName = alumno.firstName
        var lastName = alumno.lastName
        var dni = alumno.dni
        var email = alumno.email
        var li = document.createElement('li')
        li.className = 'list-group-item '
        li.id = dni
        var fullDni = 'DNI: ' + dni
        li.innerHTML = '<h1>' + firstName + '</h1><h2>' + lastName +  '</h2><p>' + fullDni + '<br>' + email + '</p>'
        searchList.appendChild(li)

    } else {
        console.log('Nombre no encontrado.')
    }
}


// PASAR A MAYÚSCULAS y BUSCAR

function pasarAMayusculas (studentName) {
    if (typeof studentName === 'string') {
        return studentName.toUpperCase()
    }
}

function buscar (studentName) {
    var index = -1
    var studentUpperCase = pasarAMayusculas(studentName)
    console.log('Término ingresado: ' + studentName)

    for (var i = 0; i < studentList.length; i++) {
        var alumno = studentList[i]
        var firstName = alumno.firstName
        var firstNameUppercase = pasarAMayusculas(firstName)
        var lastName = alumno.lastName
        var lastNameUppercase = pasarAMayusculas(lastName)
        if (firstNameUppercase.indexOf(studentUpperCase) !== -1  || lastNameUppercase.indexOf(studentUpperCase) !== -1) {
            index = i
            console.log('Nombre encontrado: ' + firstName + ' ' + lastName + ' / index: ' + index)
            break
        }
    }
    return index
}




// AGREGAR AL CLICK:

var addStudentButton = document.getElementById('addStudentButton')
addStudentButton.onclick = addStudentLi


// BORRAR AL CLICK:

var deleteStudentButton = document.getElementById('deleteStudentButton')
deleteStudentButton.onclick = borrarAlumno


// BUSCAR AL CLICK

var searchStudentButton = document.getElementById('searchStudentButton')
searchStudentButton.onclick = buscarNombre



// RESETEAR TODOS LOS CAMPOS

function resetAllInputs () {
    firstName.value = ''
    firstName.classList.remove('is-valid')
    firstName.classList.remove('is-invalid')
    lastName.value = ''
    lastName.classList.remove('is-valid')
    lastName.classList.remove('is-invalid')
    dni.value = ''
    dni.classList.remove('is-valid')
    dni.classList.remove('is-invalid')
    email.value = ''
    email.classList.remove('is-valid')
    email.classList.remove('is-invalid')
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


// PARSEAR NÚMERO:

function parseNumber(number) {
    var parsedNumber = parseInt(number, 10)
    if (isNaN(parsedNumber)) {
        return false
    } else {
        return parsedNumber
    }
}
