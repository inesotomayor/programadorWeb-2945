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
        $('#root').fadeOut(300, function () {
            $('#root').load('../partials/home.html').fadeIn(300)
        })
    })

    // Click - sección 1

    $('#people').click(function () {
        $('#root').fadeOut(300, function () {
            $('#root').load('../partials/seccion1.html').fadeIn(300)
        })
    })

    // Click - sección 2

    $('#localStorage').click(function () {
        $('#root').fadeOut(300, function () {
            $('#root').load('../partials/seccion2.html').fadeIn(300)
        })
    })

    // Click - sección 3

    $('#contact').click(function () {
        $('#root').fadeOut(300, function () {
            $('#root').load('../partials/seccion3.html').fadeIn(300)
        })
    })

})