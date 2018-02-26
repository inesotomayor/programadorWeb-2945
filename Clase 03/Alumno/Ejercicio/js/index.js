// Crear un función que muestre el tipo de día en consola
// - La función tiene que recibir como parámetro un día de la semana y mostrar en consola `Es día hábil`, `Es día de fin de semana` u `No es un día valido` según corresponda.
// - Pedirle al usuario que ingrese un día tres veces y llamar a la función cada vez para mostrar el resultado en consola.

function tipoDeDia(diaIngresado) {
    switch (diaIngresado) {
        case 'Lunes':
        case 'Martes':
        case 'Miércoles':
        case 'Jueves':
        case 'Viernes':
            console.log(diaIngresado + ' es día hábil')
            break
        case 'Sábado':
        case 'Domingo':
            console.log(diaIngresado + ' es fin de semana')
            break
        default:
            console.log(diaIngresado + ' es un día inválido')
            break
    }
}

var dia1 = prompt('Ingresar un día de la semana')
tipoDeDia(dia1)

var dia2 = prompt('Ingresar un día de la semana')
tipoDeDia(dia2)

var dia3 = prompt('Ingresar un día de la semana')
tipoDeDia(dia3)


// Crear una función que muestre nombre y apellido en consola
// - La función debe pedirle al usuario el nombre y el apellido y mostrar ambos en consola, junto con un saludo. Ej: `Hola Juan Perez`, llamar a la función para probarla.

function nombreApellido() {
    var nombre = prompt('Ingrese su nombre')
    var apellido = prompt('Ingrese su apellido')
    console.log('Hola ' + nombre + ' ' + apellido + '!')
}

nombreApellido()
nombreApellido()
nombreApellido()


