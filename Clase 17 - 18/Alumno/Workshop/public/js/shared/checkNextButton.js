// BOTÓN DE VER MÁS

function checkNextButton (data, cbk) { // Data + función callback

    if (data.next) {
        $('#seeMore').one('click', function () {
            AjaxCall.getData(data.next, cbk)
        })
    } else {
        $('#seeMore').attr('disabled', true)
    }
}
