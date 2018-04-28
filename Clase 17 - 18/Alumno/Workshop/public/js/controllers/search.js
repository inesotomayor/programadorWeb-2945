var searchController = function () {
    console.log('Carga Búsqueda')

    $(document).ready(function () {

        var searchList = []


        // ARRAYS - TRAER DE LOCAL STORAGE O CREAR VACÍO Y GUARDARLO
        var charactersList = JSON.parse(localStorage.getItem('charactersList'))
        if (charactersList == null) {
            charactersList = []
            localStorage.setItem("charactersList", JSON.stringify(charactersList))
        }

        var savedList = JSON.parse(localStorage.getItem('savedList'))
        if (savedList == null) {
            savedList = []
            localStorage.setItem("savedList", JSON.stringify(savedList))
        }


        // AL CLICK REALIZAR BÚSQUEDA Y ARMAR TABLA

        var keyword = $('#searchInput').val()
        console.log(keyword)

        var url = 'https://swapi.co/api/people/?search=' + keyword
        console.log('Pidiendo info...')
        AjaxCall.getData(url, showPeople)



        // MOSTRAR PERSONAJES DE LA API

        function showPeople (error, data) {
            if (!error) {
                var people = data.results

                $('#resultados').append('<span id="cantidad"></span> ' +
                    'Resultados de búsqueda: "' +
                    '<span id="keyword"></span>"'
                )


                for (var i = 0; i < people.length; i++) {
                    var character = people[i]
                    var keyword = character.name
                    var id = i + 1

                    // AGREGAR A ARRAY GENERAL
                    searchList.push(character)

                    // AGREGAR A LOCAL STORAGE
                    localStorage.setItem("searchList", JSON.stringify(searchList))


                    // TRADUCIR Y ARMAR FILAS TABLA
                    createTable (charactersList, character, id, 'guardarBusqueda')
                }

                // HABILITAR BOTÓN DE VER MÁS
                checkNextButton (data, showPeople)

            } else {
                console.log('Hay un error', error)
            }

            // ACTUALIZAR DATOS DE LA LISTA

            var enteredKeyword = $('#searchInput').val()
            $('#cantidad').html(data.count)
            $('#keyword').html(enteredKeyword)


            // VACIAR INPUT DE BÚSQUEDA

            $('#searchInput').val('')

        }


        // AL CLICK REALIZAR BÚSQUEDA / GUARDAR / BORRAR FILA

        $(document).on('click', '.btn-guardar-encontrados', function() {
            var keyword = $(this).parent().parent().children('td.name').html()

            // BUSCAR EN AMBOS LISTADOS

            var index = searchName(keyword, searchList)
            console.log('Index general: ' + index)
            var indexSaved = searchName(keyword, savedList)
            console.log('Index guardados: ' + indexSaved)

            if (indexSaved == -1) {

                // GUARDAR EN ARRAY
                savedList.push(searchList[index])

                // GUARDAR EN LOCAL STORAGE
                localStorage.setItem("savedList", JSON.stringify(savedList))

                console.log('Guardando personaje...')
                console.log(savedList)
            } else {
                console.log('El personaje ya está guardado, no se vuelve a agregar a Saved')
            }

            // BORRAR TR
            $(this).parent().parent().fadeOut('fast')

        })

    })

}