var squares = $('.square')

var clickCount = 0

squares.click(function() {
    var squareNode = $(this)
    if (!(squareNode.hasClass('circle') || squareNode.hasClass('cross'))) {
        clickCount++  // Suma un click
        if (clickCount % 2 === 0) {  // Cambia el estilo según sea par o impar
            $(this).addClass('circle')
        } else {
            $(this).addClass('cross')
        }
    }

    if (clickCount === 9) {
        clickCount = 0 // Resetear la cuenta de clicks a 0
        setTimeout(function() {
            // Con delay, borrar todos los estilos y reiniciar el juego
            squares.removeClass('circle').removeClass('cross')
        }, 1000)
    }
})