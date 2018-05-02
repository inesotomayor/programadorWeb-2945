$(document).ready(function () {

    // Cargar la Home

    $('#root').load('../partials/home.html', homeController)
    $('.nav-item:first-child .nav-link').addClass('active', 1000)

    // Al click, quitar .active del menú y ponerle al elemento clickeado

    $('.nav-link').click(function() {
        $('.nav-link').removeClass('active')
        $(this).addClass('active', 1000)
    })

    // Click - Home

    $('#home').click(function () {
        $('#root').fadeOut(300, function () {
            $('#root').load('../partials/home.html', homeController).fadeIn(300)
        })
    })

    // Click - People

    $('#people').click(function () {
        $('#root').fadeOut(300, function () {
            $('#root').load('../partials/people.html', peopleController).fadeIn(300)
        })
    })

    // Click - Guardados

    $('#localStorage').click(function () {
        $('#root').fadeOut(300, function () {
            $('#root').load('../partials/local-storage.html', localstorageController).fadeIn(300)
        })
    })

    // Click - Contact

    $('#contact').click(function () {
        $('#root').fadeOut(300, function () {
            $('#root').load('../partials/contact.html', contactController).fadeIn(300)
        })
    })


    // Click - Search

    $('#searchButton').click(function () {
        $('.nav-link').removeClass('active')
        $('#root').fadeOut(300, function () {
            $('#root').load('../partials/search.html', searchController).fadeIn(300)
        })
    })

})