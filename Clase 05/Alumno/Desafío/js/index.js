// Crear una función constructora de objetos películas
// - El objeto película deberá tener un id (generado automáticamente), titulo, año, director y actores (deberá ser un array).
// Deberá tener métodos para editar todas sus propiedades (get y set), menos su id, y para los actores tendrá que ir agregando uno a uno.
// Agregar dos actores por película.


var pelicula = new Pelicula('Casablanca', '1942', 'Michael Curtiz', [])

function Pelicula (titulo, ano, director, actores) {

    var id = Math.random ()
    this.id = id
    this.titulo = titulo
    this.ano = ano
    this.director = director
    this.actores = actores
    actores.push('Humphrey Bogart')
    actores.push('Ingrid Bergman')
}

console.log (
    'ID: ' + pelicula.id + ' /',
    'Título: ' + pelicula.titulo + ' /',
    'Año: ' + pelicula.ano + ' /',
    'Director: ' + pelicula.director + ' /',
    'Actores: ' + pelicula.actores.join(' & ')
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

