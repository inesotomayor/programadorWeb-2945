// Pedir nombre mediante prompt y mostrarlo en consola junto con algun texto de saludo. Ej: Hola Juan!

var nombre = prompt('Ingrese su nombre')
console.log('Hola' + ' ' + nombre + '!')


// Pedir un número mediante prompt, parsearlo, sumarlo a otro que este en una variable y luego mostrar el resultado en consola.

var number1 = prompt('Ingrese un número, se mostrará en la consola')
var parsedNumber1 = parseInt(number1, 10)
console.log(parsedNumber1)


// Pedir un número mediante prompt, parsearlo, restarlo a otro que esté en una variable y luego mostrar el resultado en consola.

var number2 = prompt('Ingrese un nuevo número, le vamos a restar 5')
var parsedNumber2 = parseInt(number2, 10)
var number3 = 5
console.log(parsedNumber2 - number3)


// Pedir un número mediante prompt, luego otro, parsearlos y sumarlos, luego mostrar el resultado en consola.


var number4 = prompt('Ingrese otro número, se sumará al siguiente')
var number5 = prompt('Ingrese otro número más para ver el resultado')
var parsedNumber4 = parseInt(number4, 10)
var parsedNumber5 = parseInt(number5, 10)
console.log(parsedNumber4 + parsedNumber5)