var localstorageController = function () {
  console.log('Carga guardados')

  $(document).ready(function () {

    // ARRAY GUARDADOS - TRAER DE LOCAL STORAGE O CREAR VACÍO Y GUARDARLO
    var savedList = JSON.parse(localStorage.getItem('savedList'))
    if (savedList === null) {
      savedList = []
      localStorage.setItem("savedList", JSON.stringify(savedList))
    }

    showSaved()


    // ARMAR FILAS TABLAS GUARDADO

    function showSaved () {

      $('#guardados').append('<span id="cantidad"></span> ' +
          'Personajes guardados'
      )

      for (var i = 0; i < savedList.length; i++) {
        var character = savedList[i]
        var characterUrl = character.url
        var idBtn = characterUrl.match(/\d+/)
        var id = i + 1


        // TRADUCIR Y ARMAR FILAS TABLA
        createTable (savedList, character, id, 'eliminar', idBtn)
      }

      // DATOS DE LA LISTA

      var count = savedList.length
      $('#cantidad').html(count)

    }


    // BORRAR AL CLICK

    $(document).on('click', '.btn-eliminar', function() {
      var characterUrl = $(this).parent().attr('id')

      // BORRAR DEL ARRAY
      var index = searchUrl(characterUrl, savedList)
      savedList.splice([index],1)

      // BORRAR DEL LOCAL STORAGE
      localStorage.setItem("savedList", JSON.stringify(savedList))

      // BORRAR TR + CAMBIAR nº
      $(this).parent().parent().fadeOut('fast')
      var count = savedList.length
      $('#cantidad').html(count)

    })

  })

}