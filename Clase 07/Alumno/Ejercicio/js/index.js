// Crea una función que permita guardar un nombre en una lista en el localStorage

// - La función tiene que poder guardar un nombre en mayúsculas en una lista tipo array almacenada en el localStorage. Se provee una lista inicial que podría estar cargada o no, la función tiene que poder verificarlo y no romper si la lista no existe.


var studentsList = [
  'MARIEL' ,
  'ANA' ,
  'FLORENCIA'
]
console.log(studentsList)


// Transformar un array JS en un string JSON:
var stringStudentList = JSON.stringify(studentsList)
//console.log(stringStudentList)

// Transformar un string JSON en un array JS:
var parsedStudentList = JSON.parse(stringStudentList)
//console.log(parsedStudentList)


// Función para agregar un item a la lista:

function addStudent() {
  name = prompt('Ingrese un nombre para sumar a la lista:')
  var nameUpperCase = name.toUpperCase()

  var parsedStudentList

  // Traer el localStorage:
  var localStudentList = localStorage.getItem('nombres')

  // Verificar si el localStorage tiene data y parsearla.
  // Si está vacío generar un nuevo array vacío:
  if (localStudentList) {
    parsedStudentList = JSON.parse(localStudentList)
  } else {
    parsedStudentList = []
  }

  // Agregar el nombre en el nuevo array:
  parsedStudentList.push(nameUpperCase)

  // Transformar el nuevo array en un string JSON:
  reStringSudentList = JSON.stringify(parsedStudentList)

  // Mandar el JSON a localStorage
  localStorage.setItem('nombres', reStringSudentList)

  // Ver en consola el nuevo localStorage con cada nombre agregado, parseado en un array:
  console.log(parsedStudentList)

}


addStudent()

















// Agregar al localStorage

// localStorage.setItem('firstName', 'Pato')

// localStorage.setItem('lastName', 'Donald')

// localStorage.setItem('age', 46)

// var obj = {
//   firstName: 'Pato',
//   height: 181
// }

// var stringfiedObj = JSON.stringify(obj)

// localStorage.setItem('obj', stringfiedObj)

// Sacar info del localStorage

// console.log(typeof localStorage.getItem('age') === 'string')

// var savedObj = localStorage.getItem('obj')

// var parsedObj = JSON.parse(savedObj)

// console.log(parsedObj.firstName)

// parsedObj.firstName = 'Ana'

// console.log(parsedObj.firstName)

// Guardar cambio en el localStorage

// var savedObj = localStorage.getItem('obj')

// var parsedObj = JSON.parse(savedObj)

// parsedObj.firstName = 'Ana'

// var stringfiedObj = JSON.stringify(parsedObj)

// localStorage.setItem('obj', stringfiedObj)

// Borrar un item de localStorage

// localStorage.removeItem('lastName')

// Borrar todo el localStorage

// localStorage.clear()

// sesionStorage

// localStorage.setItem('name', 'Pato')

// sessionStorage.setItem('name', 'Pato')

// var movies = [
//   'Alien',
//   'Matrix',
//   'Titanic',
//   'Terminator',
//   'Los bañeros locos',
//   'La naranja mécanica',
//   'The warrios'
// ]

// var stringMovies = JSON.stringify(movies)

// localStorage.setItem('movies', stringMovies)

// Mostrar lo del localStorage

var localMovies = localStorage.getItem('movies')

var parsedMovies

if (JSON.parse(localMovies)) {
  parsedMovies = JSON.parse(localMovies)
} else {
  parsedMovies = []
}

// console.log(parsedMovies[2])
if (parsedMovies && Array.isArray(parsedMovies)) {
  console.log(parsedMovies.length)
  // if (localMovies !== null || localMovies !== undefined) {
  for (var i = 0; i < parsedMovies.length; i++) {
    console.log(parsedMovies[i])
  }
}
