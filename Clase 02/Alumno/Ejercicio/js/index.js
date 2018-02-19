// Pedir nombre mediante prompt al usuario que ingrese un día de la semana
// y mostrar en consola un mensaje si el día es fin de semana.

var diaSemana = prompt('Ingresar un día de la semana')

// Variable con el día ingresado por el usuario
var diaElegido = diaSemana

switch (diaElegido) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Jueves':
    case 'Viernes':
        console.log('El ' + diaElegido + ' es un día hábil')
        break
    case 'Sábado':
    case 'Domingo':
        console.log('El ' + diaElegido + ' es fin de semana')
        break

// Si se eligió cualquier otra cosa
    default:
        console.log('Día inválido')
        break
}





// var nombre = prompt('Nombre?')
// if (nombre === 'Ines' || nombre === 'Frida') {
//     console.log('El nombre es correcto')
// } else {
//     console.log('Nombre incorrecto')
// }


// var resultOfGame = prompt('Resultado del partido')
// switch (resultOfGame) {
//     case 'Gano':
//     case 'Ganó':
//         console.log('Suman 3 puntos')
//         break
//     case 'Perdió':
//         console.log('Suma 1 punto')
//         break
//     case 'Empató':
//         console.log('No suma ningún punto')
//         break
//     default:
//         console.log('Resultado inválido')
//         break
// }