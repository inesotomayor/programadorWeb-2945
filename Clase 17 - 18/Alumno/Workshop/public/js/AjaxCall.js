// Función autoinvocada: no necesita una llamada específica, se ejecuta sóla.
// Va entre paréntesis:
// (function () {
//    var x = "Hello!!"
//    console.log(x)
// })();

var AjaxCall = (function () {
  var exposed = {}

  exposed.getData = function (url, callback) {
    $.ajax(url)
      .done(function (data) {
        callback(null, data)
        console.log('URL: ' + url)
      })
      .fail(function (error) {
        callback(error)
      })
  }

  return exposed

})()
