// Crear un formulario que valide campos antes de enviar la información
//
// - El formulario deberá contar con los siguientes campos y validarlos cada vez que el usuario pierda el foco.
// - Nombre: Deberá tener contenido.
// - Apellido: Deberá tener contenido.
// - Email: Deberá contener arroba, punto y contenido.
// - Contraseña1: Deberá tener un mínimo de 6 caracteres y contenido.
// - Contraseña2: Deberá ser igual a contraseña1.
// - Edad: Deberá ser mayor a 18 años y ser un número.
//
// - Deberá tener un botón para enviar la información que deberá habilitarse solo si todos los campos son validos.



// NOMBRE:

var inputNombre = document.getElementById('inputNombre')

inputNombre.onblur = function (event) {
    showErrorOnEmptyInput(event)
    var inputNombreNode = event.target
    var value = inputNombreNode.value
    var parentInputNombreNode = inputNombreNode.parentElement
    var nombreErrorNode = document.getElementById('nombreError')

    if (nombreErrorNode) {
        parentInputNombreNode.removeChild(nombreErrorNode)
    }

    if (value) {
        showValidInput(inputNombreNode)
    } else {
        showInvalidInput(inputNombreNode)
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
        showValidInput(inputApellidoNode)
    } else {
        showInvalidInput(inputApellidoNode)
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

    if (value && typeof value === 'string' && value.indexOf('@') > -1 && value.indexOf('.') > -1) {
        showValidInput(inputEmailNode)
    } else {
        showInvalidInput(inputEmailNode)
        emailErrorNode = document.createElement('span')
        emailErrorNode.id = 'emailError'
        emailErrorNode.innerHTML = 'E-mail inválido'
        parentInputEmailNode.appendChild(emailErrorNode)
    }
    validateAllFields()
}


// PASSWORD 1:

var inputContrasena1 = document.getElementById('inputContrasena1')

inputContrasena1.onblur = function contrasena1 (event) {

    var inputContrasena1Node = event.target
    var value = inputContrasena1Node.value
    var parentInputContrasena1Node = inputContrasena1Node.parentElement
    var Contrasena1ErrorNode = document.getElementById('Contrasena1Error')

    if (Contrasena1ErrorNode) {
        parentInputContrasena1Node.removeChild(Contrasena1ErrorNode)
    }

    if (value && typeof value === 'string' && value.length >= 6) {
        showValidInput(inputContrasena1Node)
    } else {
        showInvalidInput(inputContrasena1Node)
        Contrasena1ErrorNode = document.createElement('span')
        Contrasena1ErrorNode.id = 'Contrasena1Error'
        Contrasena1ErrorNode.innerHTML = 'Contraseña inválida. '
        parentInputContrasena1Node.appendChild(Contrasena1ErrorNode)
    }
    validateAllFields()
}


// PASSWORD 2:

var inputContrasena2 = document.getElementById('inputContrasena2')

inputContrasena2.onblur = function (event) {
    var inputContrasena2Node = event.target
    var value = inputContrasena2Node.value
    var parentInputContrasena2Node = inputContrasena2Node.parentElement
    var Contrasena2ErrorValidezNode = document.getElementById('Contrasena2ErrorValidez')
    var Contrasena2ErrorCoindidenciaNode = document.getElementById('Contrasena2ErrorCoindidencia')

    // VALIDAR Y COMPARAR LAS DOS CONTRASEÑAS:
    var valueinputContrasena1 = inputContrasena1.value
    var valueinputContrasena2 = inputContrasena2.value

    if (Contrasena2ErrorValidezNode) {
        parentInputContrasena2Node.removeChild(Contrasena2ErrorValidezNode)
    }
    if (value && typeof value === 'string' && value.length >= 6) {
        showValidInput(inputContrasena2Node)
    } else {
        showInvalidInput(inputContrasena2Node)

        // Poner el mensaje de "inválido"
        Contrasena2ErrorValidezNode = document.createElement('span')
        Contrasena2ErrorValidezNode.id = 'Contrasena2ErrorValidez'
        Contrasena2ErrorValidezNode.innerHTML = 'Contraseña inválida. '
        parentInputContrasena2Node.appendChild(Contrasena2ErrorValidezNode)
    }

    if (Contrasena2ErrorCoindidenciaNode) {
        parentInputContrasena2Node.removeChild(Contrasena2ErrorCoindidenciaNode)
    }
    if (valueinputContrasena1 !== valueinputContrasena2) {
        showInvalidInput(inputContrasena2Node)

        // Poner el mensaje de "no coincide"
        Contrasena2ErrorCoindidenciaNode = document.createElement('span')
        Contrasena2ErrorCoindidenciaNode.id = 'Contrasena2ErrorCoindidencia'
        Contrasena2ErrorCoindidenciaNode.innerHTML = 'La contraseña no coincide. '
        parentInputContrasena2Node.appendChild(Contrasena2ErrorCoindidenciaNode)

        // Quitar el mensaje de "inválido" si lo tiene
        if (Contrasena2ErrorValidezNode) {
            parentInputContrasena2Node.removeChild(Contrasena2ErrorValidezNode)
        }
    }
    validateAllFields()
}

// EDAD - Mayor de 18:

var inputEdad = document.getElementById('inputEdad')

inputEdad.onblur = function (event) {
    var inputEdadNode = event.target
    var value = inputEdadNode.value
    var parsedEdad = parseInt(value, 10)
    var parentInputEdadNode = inputEdadNode.parentElement
    var NumeroErrorNode = document.getElementById('NumeroError')
    var EdadErrorNode = document.getElementById('EdadError')

    // Quitar mensajes de error si los tiene:
    if (NumeroErrorNode) {
        parentInputEdadNode.removeChild(NumeroErrorNode)
    }
    if (EdadErrorNode) {
        parentInputEdadNode.removeChild(EdadErrorNode)
    }

    // Validar que se ingrese un número:
    if (isNaN(parsedEdad)) {
        showInvalidInput(inputEdadNode)
        NumeroErrorNode = document.createElement('span')
        NumeroErrorNode.id = 'NumeroError'
        NumeroErrorNode.innerHTML = 'Ingrese un número válido. '
        parentInputEdadNode.appendChild(NumeroErrorNode)
    }

    // Validar mayor de edad:
    else if (value && parsedEdad >= 18) {
        showValidInput(inputEdadNode)
    } else {
        showInvalidInput(inputEdadNode)
        EdadErrorNode = document.createElement('span')
        EdadErrorNode.id = 'EdadError'
        EdadErrorNode.innerHTML = 'Debe ser mayor a 18 años. '
        parentInputEdadNode.appendChild(EdadErrorNode)
    }
    validateAllFields()
}

function validateAllFields () {
    var submitButtom = document.getElementById('submitButtom')
    var validIFields = document.getElementsByClassName('is-valid')
    if (validIFields && validIFields.length === 6) { // Si los 6 campos son válidos
        submitButtom.disabled = false
    } else {
        submitButtom.disabled = true
    }
}


function showErrorOnEmptyInput (event) {
    var inputNode = event && event.target
    var value = inputNode && inputNode.value
    if (value) {
        showValidInput(inputNode)
    } else {
        showInvalidInput(inputNode)
    }
    validateAllFields()
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