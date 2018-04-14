// Errores y otras variables

var REQUIRED_FIELD = 'Campo obligatorio'
var REQUIRED_CARACTER = 'Debe tener un '
var ERROR_TYPE = 'Tiene que ser de tipo '

var inputTextNodes = $('.form-control')
var inputNode = $('input[type="email"]')


// VALIDAR TODOS LOS CAMPOS COMPLETOS

inputTextNodes.blur(function () {
    var inputNode = $(this)
    var value = inputNode.val()
    var parentNode = inputNode.parent()

    // Quitar error si ya hay mensaje
    parentNode.children('.error').remove()

    if (value) {
        setValid(inputNode)
        inputNode.next().remove()
    } else {
        setInvalid(inputNode)
        parentNode.append('<p class="error">' + REQUIRED_FIELD + '</p>')
    }
    allowSubmitButton()
})


// VALIDAR EMAIL

inputNode.blur(function() {
    var value = inputNode.val()
    var parentNode = inputNode.parent()

    // Quitar error si ya hay mensaje
    parentNode.children('.error').remove()

    var errorText = ''

    if (!value) {
        errorText = REQUIRED_FIELD
    } else if (typeof value !== 'string') {
        errorText = ERROR_TYPE + 'String'
    } else if (value.indexOf('@') === -1) {
        errorText = errorText + REQUIRED_CARACTER + 'arroba @'
    } else if (value.indexOf('.') === -1) {
        errorText = errorText + REQUIRED_CARACTER + 'punto .'
    }

    if (!errorText) {
        setValid(inputNode)
    } else {
        setInvalid(inputNode)
        parentNode.append('<p class="error">' + errorText + '</p>')
    }
    allowSubmitButton()
})


// HABILITAR EL BOTÓN

function allowSubmitButton () {
    if ($('#firstName').hasClass('is-valid') && $('#email').hasClass('is-valid') && $('#comments').hasClass('is-valid')) { // Si los 3 campos son válidos
        $('#submitButton').prop('disabled', false)
    } else {
        $('#submitButton').prop('disabled', true)
    }
}


// ESTILOS CAMPOS VÁLIDOS / INVÁLIDOS

function setValid (node) {
    node.removeClass('is-invalid')
    node.addClass('is-valid')
}

function setInvalid (node) {
    node.removeClass('is-valid')
    node.addClass('is-invalid')
}