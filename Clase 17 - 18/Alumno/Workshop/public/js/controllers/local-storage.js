var localstorageController = function () {
  console.log('Carga guardados')

  $(document).ready(function () {

    // ARRAY GUARDADOS - TRAER DE LOCAL STORAGE O CREAR VACÍO Y GUARDARLO
    var savedList = JSON.parse(localStorage.getItem('savedList'))
    if (savedList == null) {
      savedList = []
      localStorage.setItem("savedList", JSON.stringify(savedList))
    }

    showSaved()


    // ARMAR FILAS TABLAS GUARDADO

    function showSaved () {

      for (var i = 0; i < savedList.length; i++) {
        var character = savedList[i]
        var index = i + 1

        switch (character.gender) {
          case 'male':
            character.gender = 'Hombre'
            break
          case 'female':
            character.gender = 'Mujer'
            break
          case 'n/a':
            character.gender = '-'
            break
        }

        switch (character.mass) {
          case 'unknown':
            character.mass = '-'
            break
        }

        switch (character.eye_color) {
          case 'yellow':
            character.eye_color = 'Amarillo'
            break
          case 'red':
            character.eye_color = 'Rojo'
            break
          case 'blue':
            character.eye_color = 'Azul'
            break
          case 'brown':
            character.eye_color = 'Marrón'
            break
          case 'black':
            character.eye_color = 'Negro'
            break
          case 'orange':
            character.eye_color = 'Naranja'
            break
          case 'blue-gray':
            character.eye_color = 'Griz azulado'
            break
          case 'hazel':
            character.eye_color = 'Avellana'
            break
          case 'pink':
            character.eye_color = 'Rosa'
            break
          case 'gold':
            character.eye_color = 'Dorado'
            break
          case 'red, blue':
            character.eye_color = 'Rojo, Azul'
            break
          case 'green, yellow':
            character.eye_color = 'Verde, Amarillo'
            break
          case 'white':
            character.eye_color = 'Blanco'
            break
          case 'dark':
            character.eye_color = 'Oscuro'
            break
          case 'unknown':
            character.eye_color = '-'
            break
        }

        $('#tableBody').append(
            '<tr>' +
            '<th scope="row">' + index + '</th>' +
            '<td class="name">' + character.name + '</td>' +
            '<td>' + character.gender + '</td>' +
            '<td>' + character.height + ' cm</td>' +
            '<td>' + character.mass + ' kg</td>' +
            '<td>' + character.eye_color + '</td>' +
            '<td><button class="btn btn-primary btn-eliminar" type="button">Eliminar</button></td>' +
            '</tr>'
        )
      }
    }


    // BORRAR AL CLICK

    $(document).on('click', '.btn-eliminar', function() {
      var searchText = $(this).parent().parent().children('td.name').html()

      // BORRAR DEL ARRAY
      var index = searchInSavedList(searchText)
      savedList.splice([index],1)

      // BORRAR DEL LOCAL STORAGE
      localStorage.setItem("savedList", JSON.stringify(savedList))

      // BORRAR TR
      $(this).parent().parent().fadeOut('fast')

    })



    // BUSCAR EN RESULTADOS GUARDADOS

    function searchInSavedList (searchText) {
      var index = -1
      for (var i = 0; i < savedList.length; i++) {
        var character = savedList[i]
        var name = character.name

        if (name.indexOf(searchText) !== -1) {
          index = i
          break
        }
      }
      return index
    }

  })

}