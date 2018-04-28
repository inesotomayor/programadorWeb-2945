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