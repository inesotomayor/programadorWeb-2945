// Crear un formulario que valide campos antes de enviar la información
//
// - El formulario deberá contar con los siguientes campos y validarlos cada vez que el usuario pierda el foco.
// - Nombre: Deberá tener contenido.
// - Apellido: Deberá tener contenido.
// - Email: Deberá contener arroba, punto y contenido.
//
// - Deberá tener un botón para enviar la información que deberá habilitarse solo si todos los campos son validos.



// NOMBRE:

var inputNombre = document.getElementById('inputNombre')

inputNombre.onblur = function (event) {

    var inputNombreNode = event.target
    var value = inputNombreNode.value
    var parentInputNombreNode = inputNombreNode.parentElement
    var nombreErrorNode = document.getElementById('nombreError')

    if (nombreErrorNode) {
        parentInputNombreNode.removeChild(nombreErrorNode)
    }

    if (value) {
        inputNombreNode.classList.remove('is-invalid')
        inputNombreNode.classList.add('is-valid')
    } else {
        inputNombreNode.classList.remove('is-valid')
        inputNombreNode.classList.add('is-invalid')
        nombreErrorNode = document.createElement('span')
        nombreErrorNode.id = 'nombreError'
        nombreErrorNode.innerHTML = 'Completar el nombre'
        parentInputNombreNode.appendChild(nombreErrorNode)
    }
    validateAllFields()
}


// APELLIDO:

var inputApellido = document.getElementById('inputApellido')

inputApellido.onblur = function (event) {

    var inputApellidoNode = event.target
    var value = inputApellidoNode.value
    var parentInputApellidoNode = inputApellidoNode.parentElement
    var apellidoErrorNode = document.getElementById('apellidoError')

    if (apellidoErrorNode) {
        parentInputApellidoNode.removeChild(apellidoErrorNode)
    }

    if (value) {
        inputApellidoNode.classList.remove('is-invalid')
        inputApellidoNode.classList.add('is-valid')
    } else {
        inputApellidoNode.classList.remove('is-valid')
        inputApellidoNode.classList.add('is-invalid')
        apellidoErrorNode = document.createElement('span')
        apellidoErrorNode.id = 'apellidoError'
        apellidoErrorNode.innerHTML = 'Completar el apellido'
        parentInputApellidoNode.appendChild(apellidoErrorNode)
    }
    validateAllFields()
}


// MAIL:

var inputEmail = document.getElementById('inputEmail')

inputEmail.onblur = function (event) {

    var inputEmailNode = event.target
    var value = inputEmailNode.value
    var parentInputEmailNode = inputEmailNode.parentElement
    var emailErrorNode = document.getElementById('emailError')

    if (emailErrorNode) {
        parentInputEmailNode.removeChild(emailErrorNode)
    }

    if (
        value &&
        typeof value === 'string' && // Es un string
        value.indexOf('@') !== -1 && // Tiene un "@"
        value.indexOf('.') !== -1 && // Tiene un "."
        value.length >= 5 // Largo mínimo ej.: "x@x.x"
        ) {
        inputEmailNode.classList.remove('is-invalid')
        inputEmailNode.classList.add('is-valid')
    } else {
        inputEmailNode.classList.remove('is-valid')
        inputEmailNode.classList.add('is-invalid')
        emailErrorNode = document.createElement('span')
        emailErrorNode.id = 'emailError'
        emailErrorNode.innerHTML = 'E-mail inválido'
        parentInputEmailNode.appendChild(emailErrorNode)
    }
    validateAllFields()
}

function validateAllFields () {
    var submitButtom = document.getElementById('submitButtom')
    var validIFields = document.getElementsByClassName('is-valid')
    if (validIFields && validIFields.length === 3) { // Si los 3 campos son válidos
        submitButtom.disabled = false
    } else {
        submitButtom.disabled = true
    }
}