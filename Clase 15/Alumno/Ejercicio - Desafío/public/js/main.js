$(document).ready(function () {

    // Cargar la primera sección

    $('#root').load('../partials/home.html')

    // Al click, quitar .active del menú y ponerle al elemento clickeado

    $('.nav-link').click(function() {
        $('.nav-link').removeClass('active')
        $(this).addClass('active')
    })


    // Click - Home c/ otra función después

    $('#home').click(function () {
        $('#root').load('../partials/home.html', function () {
            console.log('Home')
        })
    })

    // Click - sección 1

    $('#people').click(function () {
        $('#root').load('../partials/seccion1.html')
    })

    // Click - sección 2

    $('#localStorage').click(function () {
        $('#root').load('../partials/seccion2.html')
    })

    // Click - sección 3

    $('#contact').click(function () {
        $('#root').load('../partials/seccion3.html')
    })

})