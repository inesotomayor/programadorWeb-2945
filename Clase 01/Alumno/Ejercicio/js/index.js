// Pedir nombre mediante prompt y mostrarlo en consola
// junto con algun texto de saludo. Ej: Hola Juan!

var nombre = prompt('Ingrese su nombre')
console.log('Hola ' + nombre + '!')


// Pedir un número mediante prompt, parsearlo, sumarlo a otro
// que esté en una variable y luego mostrar el resultado en consola.

var savedNumber1 = 7
var number1 = prompt('Ingrese un número, le vamos a sumar 7')
var parsedNumber1 = parseInt(number1, 10)
console.log('La suma es', parsedNumber1 + savedNumber1)


// Pedir un número mediante prompt, parsearlo, restarlo a otro
// que esté en una variable y luego mostrar el resultado en consola.

var savedNumber2 = 5
var number2 = prompt('Ingrese un nuevo número, le vamos a restar 5')
var parsedNumber2 = parseInt(number2, 10)
console.log('La resta es', parsedNumber2 - savedNumber2)


// Pedir un número mediante prompt, luego otro, parsearlos y sumarlos,
// luego mostrar el resultado en consola.


var number4 = prompt('Ingrese otro número, se sumará al siguiente')
var number5 = prompt('Ingrese otro número más para ver el resultado')
var parsedNumber4 = parseInt(number4, 10)
var parsedNumber5 = parseInt(number5, 10)
console.log('La suma de ambos números es', parsedNumber4 + parsedNumber5)