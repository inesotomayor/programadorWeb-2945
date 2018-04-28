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

      $('#guardados').append('<span id="cantidad"></span> ' +
          'Personajes guardados'
      )

      for (var i = 0; i < savedList.length; i++) {
        var character = savedList[i]
        var id = i + 1

        // TRADUCIR Y ARMAR FILAS TABLA
        createTable (savedList, character, id, 'eliminar')
      }

      // DATOS DE LA LISTA

      var count = savedList.length
      $('#cantidad').html(count)

    }


    // BORRAR AL CLICK

    $(document).on('click', '.btn-eliminar', function() {
      var keyword = $(this).parent().parent().children('td.name').html()

      // BORRAR DEL ARRAY
      var index = searchName(keyword, savedList)
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