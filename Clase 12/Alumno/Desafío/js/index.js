var inputTextNodes = $('.form-control')
var inputEmailNode = $('#email')


// VALIDAR TODOS LOS CAMPOS COMPLETOS

inputTextNodes.blur(function () {
    var inputTextNode = $(this)
    var value = inputTextNode.val()
    var parentNode = inputTextNode.parent()

    // Quitar error si ya hay mensaje
    parentNode.children('.error').remove()

    if (value) {
        setValid(inputTextNode)
        inputTextNode.next().remove()
    } else {
        setInvalid(inputTextNode)
        parentNode.append('<p class="error">Completar este campo</p>')
    }
    allowSubmitButton()
})


// VALIDAR EMAIL

inputEmailNode.blur(function() {
    var value = inputEmailNode.val()
    var parentNode = inputEmailNode.parent()

    // Quitar error si ya hay mensaje
    parentNode.children('.error').remove()

    if (!value) {
        setInvalid(inputEmailNode)
        parentNode.append('<p class="error">Completar este campo</p>')
    }
    else if (value && typeof value === 'string' && value.indexOf('@') > -1 && value.indexOf('.') > -1) {
        setValid(inputEmailNode)
        inputEmailNode.next().remove()
    } else {
        setInvalid(inputEmailNode)
        parentNode.append('<p class="error">Email inválido</p>')
    }
    allowSubmitButton()
})


// HABILITAR EL BOTÓN

function allowSubmitButton () {
    if ($('#firstName').hasClass('is-valid') && $('#email').hasClass('is-valid') && $('#comments').hasClass('is-valid')) { // Si los 3 campos son válidos
        submitButton.disabled = false
        console.log('SI')
    } else {
        submitButton.disabled = true
        console.log('NO')
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