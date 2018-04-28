// TRADUCIR Y ARMAR FILAS TABLA

var btnType = ''

function createTable (array, object, id, btn) {

    switch(btn) {
        case 'guardar':
            btnType = '<button class="btn btn-success btn-guardar" type="button">Guardar</button>'
        break;
        case 'guardarBusqueda':
            btnType = '<button class="btn btn-success btn-guardar-encontrados" type="button">Guardar</button>'
            break;
        case 'eliminar':
            btnType = '<button class="btn btn-danger btn-eliminar" type="button">Eliminar</button>'
            break;
        default : '';
    }


    switch (object.gender) {
        case 'male':
            object.gender = 'Hombre'
            break
        case 'female':
            object.gender = 'Mujer'
            break
        case 'n/a':
            object.gender = '-'
            break
    }

    switch (object.mass) {
        case 'unknown':
            object.mass = '-'
            break
    }

    switch (object.eye_color) {
        case 'yellow':
            object.eye_color = 'Amarillo'
            break
        case 'red':
            object.eye_color = 'Rojo'
            break
        case 'blue':
            object.eye_color = 'Azul'
            break
        case 'brown':
            object.eye_color = 'Marrón'
            break
        case 'black':
            object.eye_color = 'Negro'
            break
        case 'orange':
            object.eye_color = 'Naranja'
            break
        case 'blue-gray':
            object.eye_color = 'Griz azulado'
            break
        case 'hazel':
            object.eye_color = 'Avellana'
            break
        case 'pink':
            object.eye_color = 'Rosa'
            break
        case 'gold':
            object.eye_color = 'Dorado'
            break
        case 'red, blue':
            object.eye_color = 'Rojo, Azul'
            break
        case 'green, yellow':
            object.eye_color = 'Verde, Amarillo'
            break
        case 'white':
            object.eye_color = 'Blanco'
            break
        case 'dark':
            object.eye_color = 'Oscuro'
            break
        case 'unknown':
            object.eye_color = '-'
            break
    }

    $('#tableBody').append(
        '<tr>' +
        '<th scope="row">' + id + '</th>' +
        '<td class="name">' + object.name + '</td>' +
        '<td>' + object.gender + '</td>' +
        '<td>' + object.height + ' cm</td>' +
        '<td>' + object.mass + ' kg</td>' +
        '<td>' + object.eye_color + '</td>' +
        '<td>' + btnType + '</td>' +
        '</tr>'
    )
}
