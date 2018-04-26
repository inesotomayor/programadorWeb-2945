var peopleController = function () {
  console.log('Carga People')

  $(document).ready(function () {

    // ARRAY PERSONAJES
    var charactersList = []


    // ARRAY GUARDADOS - TRAER DE LOCAL STORAGE O CREAR VACÍO Y GUARDARLO
    var savedList = JSON.parse(localStorage.getItem('savedList'))
    if (savedList == null) {
      savedList = []
      localStorage.setItem("savedList", JSON.stringify(savedList))
    }

    var url = 'https://swapi.co/api/people/'
    console.log('Pidiendo info...')
    AjaxCall.getData(url, showPeople)



    // MOSTRAR PERSONAJES DE LA API

    function showPeople (error, data) {
      if (!error) {
        var people = data.results

        for (var i = 0; i < people.length; i++) {
          var character = people[i]

          // AGREGAR A ARRAY
          charactersList.push(character)

          // AGREGAR A LOCAL STORAGE
          localStorage.setItem("charactersList", JSON.stringify(charactersList))

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

          // ARMAR FILAS TABLA

          $('#tableBody').append(
              '<tr>' +
              '<th scope="row">' + charactersList.length + '</th>' +
              '<td class="name">' + character.name + '</td>' +
              '<td>' + character.gender + '</td>' +
              '<td>' + character.height + ' cm</td>' +
              '<td>' + character.mass + ' kg</td>' +
              '<td>' + character.eye_color + '</td>' +
              '<td><button class="btn btn-primary btn-guardar" type="button">Guardar</button></td>' +
              '</tr>'
          )
        }

        // BOTÓN DE VER MÁS

        if (data.next) {
          $('#seeMore').one('click', function () {
            AjaxCall.getData(data.next, showPeople)
          })
        } else {
          $('#seeMore').attr('disabled', true)
        }
      } else {
        console.log('Hay un error', error)
      }
    }


    // AL CLICK REALIZAR BÚSQUEDA / GUARDAR / BORRAR FILA

    $(document).on('click', '.btn-guardar', function() {
      var keyword = $(this).parent().parent().children('td.name').html()

      // BUSCAR EN AMBOS LISTADOS

      var index = searchName(keyword, charactersList)
      var indexSaved = searchName(keyword, savedList)
      console.log('Index general: ' + index)
      console.log('Index guardados: ' + indexSaved)

      if (indexSaved == -1) {

        // GUARDAR EN ARRAY
        savedList.push(charactersList[index])

        // GUARDAR EN LOCAL STORAGE
        localStorage.setItem("savedList", JSON.stringify(savedList))

        console.log('Guardando personaje...')
        console.log(savedList)
      } else {
        console.log('El personaje ya está guardado')
      }

      // BORRAR TR
      $(this).parent().parent().fadeOut('fast')

    })



    // BUSCAR EN ARRAY DE OBJETOS

    function searchName (keyword, array) {
      var index = -1

      for (var i = 0; i < array.length; i++) {
        var object = array[i]
        var name = object.name

        if (name.indexOf(keyword) !== -1) {
          index = i
          break
        }
      }
      return index
    }

  })

}