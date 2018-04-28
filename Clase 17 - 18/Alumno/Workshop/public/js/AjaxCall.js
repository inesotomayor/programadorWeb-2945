// Función autoinvocada: no necesita una llamada específica, se ejecuta sóla.
// Va entre paréntesis:
// (function () {
//    var x = "Hello!!"
//    console.log(x)
// })();

var AjaxCall = (function () {
    var exposed = {}

    // (*)
    exposed.getData = function (url, callback) { // Callback: función que se ejecuta cuando recibe la info.
        // Llamada ajax de jQuery
        $.ajax(url)
        // Si funciona:
            .done(function (data) {
                // Null en el primer parámetro y data en el segundo.
                callback(null, data)
                console.log('URL: ' + url)
            })
            // Si falla:
            .fail(function (error) {
                // Error en el primer parámetro y no hay data.
                callback(error)
            })
    }

    // (*) Exposed es la función y se hace píblica para reutilizar por fuera.
    return exposed

})()


// PEDIR TODA LA INFO DE UNA SÓLA VEZ

// function getData (url) {
//   $.ajax(url)
//     .done(function (data) {
//       if (data) {
//         showStarshipsNames(data.results)
//         if (data.next) {
//           getData(data.next)
//         } else {
//           console.log('Termine de pedir data')
//         }
//       }
//     })
//     .fail(function (error) {
//       callback(error)
//       console.log('error', error)
//     })
// }
