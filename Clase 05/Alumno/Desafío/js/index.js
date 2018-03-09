// Crear una función constructora de objetos películas
// - El objeto película deberá tener un id (generado automáticamente), titulo, año, director y actores (deberá ser un array).
// - Deberá tener métodos para editar todas sus propiedades (get y set), menos su id, y para los actores tendrá que ir agregando uno a uno.
// - Agregar dos actores por película.


function Pelicula (titulo, ano, director, actores) {
    var id = Math.random ()
    this.titulo = titulo
    this.ano = ano
    this.director = director
    this.actores = []

    // Setters

    this.setTitulo = function (titulo) {
        this.titulo = titulo
    }

    this.setAno = function (ano) {
        this.ano = ano
    }

    this.setDirector = function (director) {
        this.director = director
    }

    this.setActores = function (actor) {
        this.actores.push(actor)
    }

    // Getters

    this.getId = function () {
        return id
    }

    this.getTitulo = function () {
        return this.titulo
    }

    this.getAno = function () {
        return this.ano
    }

    this.getDirector = function () {
        return this.director
    }

    this.getActores = function () {
        return  this.actores.join(' & ')
    }
}


// Generación de objeto usando los Getters

var pelicula = new Pelicula()

pelicula.setTitulo('Casablanca')
pelicula.setDirector('Michael Curtiz')
pelicula.setAno(1942)
pelicula.setActores('Humphrey Bogart')
pelicula.setActores('Ingrid Bergman')

console.log (
    'ID: ' + pelicula.getId() + ' /',
    'Título: ' + pelicula.getTitulo() + ' /',
    'Año: ' + pelicula.getAno() + ' /',
    'Director: ' + pelicula.getDirector() + ' /',
    'Actores: ' + pelicula.getActores()
)


// Generación de objeto usando los Setters

var otraPelicula = new Pelicula('Titulo', 2000, 'Director')
otraPelicula.setActores('Actor 1')
otraPelicula.setActores('Actor 2')

console.log (
    'ID: ' + otraPelicula.getId() + ' /',
    'Título: ' + otraPelicula.titulo + ' /',
    'Año: ' + otraPelicula.ano + ' /',
    'Director: ' + otraPelicula.director + ' /',
    'Actores: ' + otraPelicula.actores.join(' & ')
)






// [ ---- Get y Set ----]

// var obj = {
//     A: 7,
//     get B() {
//         return this.A + 1;
//     },
//     set C(x) {
//         this.A = x / 2;
//     }
// };
//
// console.log(obj.A) // 7
// console.log(obj.B) // 8
// obj.C = 90;
// console.log(obj.A) // 45






// [ ---- Set ----]
//
// var obj = {
//     set value(x) {
//         this.array.push(x);
//     },
//     array: []
// }
// obj.value ='Value #1';
// console.log(obj.array) //['Value #1']
//
// obj.value ='Value #2';
// console.log(obj.array) //['Value #1', 'Value #2']

