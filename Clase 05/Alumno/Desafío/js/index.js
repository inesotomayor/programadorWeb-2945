// Crear una función constructora de objetos películas
// - El objeto película deberá tener un id (generado automáticamente), titulo, año, director y actores (deberá ser un array).
// Deberá tener métodos para editar todas sus propiedades (get y set), menos su id, y para los actores tendrá que ir agregando uno a uno.
// Agregar dos actores por película.


function Pelicula (titulo, ano, director, actores) {
    var id = Math.random()
    this.showFullName = function () {
        console.log('Nombre completo: ' + firstName + ' ' + lastName)
    }
    this.isLegalAge = function () {
        if (age >= mayoriaEdad) {
            // return !!(age >= mayoriaEdad)  ------> manera más profesional =)
            return true
        } else {
            return false
        }
    }

    // Info extra (no la pide el enunciado)
    this.id = id
    this.titulo = titulo
    this.ano = ano
    //this.actores = {}
}

var nuevaPelicula = new Pelicula('Roberto', 'Gómez', 56, 'San Luis 4500')
nuevaPelicula.showFullName()
console.log (
    'ID: ' + nuevoUsuario.id + ', ',
    'Address: ' + nuevoUsuario.address + ', ',
    'Edad: ' + nuevoUsuario.age + ', ',
    'Mayor de edad?: ' + nuevoUsuario.isLegalAge()
)