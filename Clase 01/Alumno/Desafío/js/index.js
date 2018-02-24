// Pedir un numero mediante prompt luego otro, parsearlos y mostrar el resultado en consola de la suma, resta, multiplicación y división acompañado de un mensaje que indique la operación que se realizó. Ej: La suma es 5.

var numero1 = prompt('Ingrese un número')
var parsedNumero1 = parseInt(numero1, 10)

var numero2 = prompt('Ingrese otro número')
var parsedNumero2 = parseInt(numero2, 10)

if (isNaN(parsedNumero1) || isNaN(parsedNumero2)) {
    console.log('Valor inválido')
} else {
    console.log('Suma: ' + parsedNumero1 + '+' + parsedNumero2 + ' =', parsedNumero1 + parsedNumero2)
    console.log('Resta: ' + parsedNumero1 + '-' + parsedNumero2 + ' =', parsedNumero1 - parsedNumero2)
    console.log('Multiplicación: ' + parsedNumero1 + '*' + parsedNumero2 + ' =', parsedNumero1 * parsedNumero2)
    if (parsedNumero2 === 0) {
        console.log('No se puede dividir por cero')
    } else {
        console.log('División: ' + parsedNumero1 + '/' + parsedNumero2 + ' =', parsedNumero1 / parsedNumero2)
    }
}

