var peopleController = function () {
    console.log('Carga People')

    $(document).ready(function () {

        // ARRAYS PERSONAJES Y TOTAL DE PERSONAJES DE LA API
        var charactersList = []
        var totalCharacters = null

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

                $('#personajes').append('<span id="cantidad"></span> ' + 'Personajes')

                for (var i = 0; i < people.length; i++) {
                    var character = people[i]
                    var keyword = character.name

                    // AGREGAR A ARRAY
                    charactersList.push(character)

                    // BUSCAR DUPLICADOS ENTRE LOS DOS ARRAYS
                    var index = searchName(keyword, charactersList)
                    var indexSaved = searchName(keyword, savedList)

                    // SI ESTÁ DUPLICADO NO CARGARLO EN LA TABLA Y QUITAR DEL ARRAY GENERAL
                    if (indexSaved !== -1) {
                        console.log('El personaje está guardado, borrar de la tabla general')
                        charactersList.splice(index)

                    // SI NO ESTÁ DUPLICADO AGREGARLO A LA TABLA Y ARRAY GENERALES
                    } else {
                        // AGREGAR A LOCAL STORAGE
                        localStorage.setItem("charactersList", JSON.stringify(charactersList))

                        // TRADUCIR Y ARMAR FILAS TABLA
                        var id = index + 1
                        createTable (charactersList, character, id, 'guardar')
                    }
                }

                // ACTUALIZAR DATOS DE LA LISTA
                if (totalCharacters === null) {
                    totalCharacters = data.count - savedList.length
                }
                $('#cantidad').html(totalCharacters)


                // HABILITAR BOTÓN DE VER MÁS
                checkNextButton (data, showPeople)

            } else {
                console.log('Hay un error', error)
            }
        }


        // AL CLICK REALIZAR BÚSQUEDA / GUARDAR / BORRAR FILA

        $(document).on('click', '.btn-guardar', function() {
            var keyword = $(this).parent().parent().children('td.name').html()
            totalCharacters = totalCharacters -1
            $('#cantidad').html(totalCharacters)

            // BUSCAR EN AMBOS LISTADOS

            var index = searchName(keyword, charactersList)
            console.log('Index general: ' + index)
            var indexSaved = searchName(keyword, savedList)
            console.log('Index guardados: ' + indexSaved)

            if (indexSaved == -1) {

                // GUARDAR EN ARRAY
                savedList.push(charactersList[index])

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