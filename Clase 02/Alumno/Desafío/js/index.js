// Crear un array con todos los días de la semana, recorrerlo
// y mostrar en consola 'Es fin de semana' cuando es sábado o domingo.

var diaSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

for (var i = 0; i < diaSemana.length; i++) {

    // Variable con el item del array
    var diaElegido = diaSemana[i]

    // Si el item es igual a Sábado y Domingo
    if (diaElegido === 'Sábado' || diaElegido === 'Domingo') {
        console.log('El ' + diaElegido + ' es fin de semana')
    }

    // Si es otro día
    else if (diaElegido === 'Lunes' || diaElegido === 'Martes' || diaElegido === 'Miércoles' || diaElegido === 'Jueves' || diaElegido === 'Viernes') {
        console.log('El ' + diaElegido + ' es un día hábil')
    }

    // Si es un día inválido
else {
        console.log(diaElegido + ' no es un día válido')
    }
}