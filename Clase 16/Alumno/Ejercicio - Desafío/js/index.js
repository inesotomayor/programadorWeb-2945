$(document).ready(function () {

  var url = 'https://swapi.co/api/planets/'
  console.log('Carga los primeros 10 planetas...')

  // Llamar a la función del otro JS (url, callback) y hace la carga incial
  AjaxCall.getData(url, showPlanetsNames)

})


function showPlanetsNames (error, data) {
  if (!error) {
    var planets = data.results
    for (var i = 0; i < planets.length; i++) {
      var planet = planets[i]
      console.log(planet.name)
    }
    if (data.next) {
      $('#showMore').one('click', function () {
        // Vuelve a llamar a la función del otro JS en la página siguiente, mientras haya data:
        AjaxCall.getData(data.next, showPlanetsNames)
      })
    } else {
      $('#showMore').attr('disabled', true)
    }
  } else {
    console.log('Hubo un error: ', error)
  }
}
