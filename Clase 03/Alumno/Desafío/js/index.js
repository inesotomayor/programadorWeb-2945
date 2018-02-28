// Convertir las operaciones de la calculadora en pequeñas funciones
// - Crear una función suma que reciba dos parámetros y devuelva la suma de ambos.
// - Crear una función resta que reciba dos parámetros y devuelva la resta de ambos.
// - Crear una función multiplicación que reciba dos parámetros y devuelva el producto de ambos.
// - Crear una función división que reciba dos parámetros y devuelva el cociente de ambos asumiendo que el segundo nunca es cero.
// - Extra: Abstraer el parseInt en otra función.


// Pedir un número y parsearlo

function pedirNumeroYParsear() {
    var numero = prompt('Ingrese un número')
    var numeroParseado = parseInt(numero, 10)
    if (isNaN(numeroParseado)) {
        return false
    } else {
        return numeroParseado
    }
}

var numero1 = pedirNumeroYParsear()
var numero2 = pedirNumeroYParsear()

// Operaciones matemáticas:

function sumar(numero1, numero2) {
    var suma = numero1 + numero2
    return suma
}

function multiplicar(numero1, numero2) {
    var multiplicacion = numero1 * numero2
    return multiplicacion
}

function restar(numero1, numero2) {
    var resta = numero1 - numero2
    return resta
}

function dividir(numero1, numero2) {
    if (numero2 === 0) {
        console.log('No se puede dividir por cero')
        return false
    } else {
        var division = numero1 / numero2
        return division
    }
}

// Dar resultados si se ingresaron números o error si es inválido:

if (numero1 === false || numero2 === false) {
    console.log('Error, no ingresaste un número válido.')
} else {
    suma = sumar(numero1, numero2)
    console.log(numero1 + ' + ' + numero2 + ' = ' + suma)

    resta = restar(numero1, numero2)
    console.log(numero1 + ' - ' + numero2 + ' = ' + resta)

    multiplicacion = multiplicar(numero1, numero2)
    console.log(numero1 + ' x ' + numero2 + ' = ' + multiplicacion)

    division = dividir(numero1, numero2)
    console.log(numero1 + ' / ' + numero2 + ' = ' + division)
}








// Crear una función que devuelva la operación pedida
// La función debe:
//  - Pedir la operación a realizar.
//  - Pedir el primer parámetro y pedir el segundo, en caso de haber elegido división y cero volver a pedirlo hasta que ingrese un numero distinto de cero.
//  - Usar las funciones del punto anterior para calcular el resultado según corresponda y mostrar en pantalla el mismo.

// Hint: do while

var pedirOperacion = prompt('Ingrese una operación: Suma, Resta, Multiplicación o División')
var numero3 = pedirNumeroYParsear()
var numero4 = pedirNumeroYParsear()

function calcular(numero3, numero4) {

    if (numero3 === false || numero4 === false) {
        console.log('Error, no ingresaste un número válido.')
    } else {
        switch (pedirOperacion) {
            case 'Suma':
            case 'suma':
                suma = sumar(numero3, numero4)
                console.log(numero3 + ' + ' + numero4 + ' = ' + suma)
                break
            case 'Resta':
            case 'resta':
                resta = restar(numero3, numero4)
                console.log(numero3 + ' - ' + numero4 + ' = ' + resta)
                break
            case 'Multiplicación':
            case 'Multiplicacion':
            case 'multiplicación':
            case 'multiplicacion':
                multiplicacion = multiplicar(numero3, numero4)
                console.log(numero3 + ' x ' + numero4 + ' = ' + multiplicacion)
                break
            case 'División':
            case 'Division':
            case 'división':
            case 'division':
                if (numero4 === 0) {
                    do {
                        console.log('Ingrese un número mayor a 0')
                        numero4 = pedirNumeroYParsear()
                    } while (numero4 === 0)
                }
                if (numero4 !== 0) {
                    division = dividir(numero3, numero4)
                    console.log(numero3 + ' / ' + numero4 + ' = ' + division)
                }
                break
            default:
                console.log('Operación no válida')
            }
        }
    }

calcular(numero3, numero4)







