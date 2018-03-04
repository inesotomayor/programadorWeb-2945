// Hacer un objeto que represente un usuario
// - Deberá tener las propiedades id (se deberá generar uno automáticamente cuando creo el usuario),
// nombre firstName, apellido lastName, edad age, dirección address.
// Deberá tener los métodos:
// - Mostrar nombre completo fullName, deberá mostrar en consola el nombre completo del usuario.
// - Es mayor de edad isLegalAge que deberá devolver true si tiene 18 años o más y false en caso contrario.
// Generar el objeto, pasando los argumentos necesarios y luego llamar a los métodos para ver como funcionan.

var mayoriaEdad = 18
function Usuario (firstName, lastName, age, address) {
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
    this.address = address
    this.age = age
}

var nuevoUsuario = new Usuario('Roberto', 'Gómez', 56, 'San Luis 4500')
nuevoUsuario.showFullName()
console.log (
    'ID: ' + nuevoUsuario.id + ', ',
    'Address: ' + nuevoUsuario.address + ', ',
    'Edad: ' + nuevoUsuario.age + ', ',
    'Mayor de edad?: ' + nuevoUsuario.isLegalAge()
)