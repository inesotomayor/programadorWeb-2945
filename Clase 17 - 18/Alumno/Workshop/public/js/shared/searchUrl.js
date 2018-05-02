// BUSCAR EN ARRAY DE OBJETOS

function searchUrl (characterUrl, array) {
    var index = -1

    for (var i = 0; i < array.length; i++) {
        var object = array[i]
        var url = object.url

        if (url.indexOf(characterUrl) !== -1) {
            index = i
            break
        }
    }
    return index
}