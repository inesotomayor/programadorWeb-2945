$(document).ready(function () {

    // Cargar la primera sección

    $('#root').load('../partials/home.html')

    // Al click, quitar .active del menú y ponerle al elemento clickeado

    $('.nav a').click(function() {
        $('.nav a').removeClass('active')
        $(this).addClass('active')
    })


    // Click - Home c/ otra función después

    $('#linkHome').click(function () {
        $('#root').load('../partials/home.html', function () {
            console.log('Home')
        })
    })

    // Click - sección 1

    $('#linkSeccion1').click(function () {
        $('#root').load('../partials/seccion1.html')
    })

    // Click - sección 2

    $('#linkSeccion2').click(function () {
        $('#root').load('../partials/seccion2.html')
    })

    // Click - sección 3

    $('#linkSeccion3').click(function () {
        $('#root').load('../partials/seccion3.html')
    })

})