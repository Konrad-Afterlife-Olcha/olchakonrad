const $hamburgerBtn = $('.header__hamburger');
const $menu = $('.header__navigation');
const $btnGoTop = $('.btnGoTop').hide()
if ($(window).width() > 550) {
    $menu.show()
} else {
    $menu.hide()
}
$hamburgerBtn.on("click", () => {
    $menu.slideToggle()
})
$(window).on("scroll", (e) => {
    if ($(window).scrollTop() > 500) {
        $btnGoTop.show()
    } else {
        $btnGoTop.hide()
    }
})
$btnGoTop.on("click", () => {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow')
})

$(window).on("resize", function () {
    if ($(window).width() > 550) {
        $menu.show()
    } else {
        $menu.hide()
    }
})

function scrollTo(element) {
    $('html, body').animate({
        scrollTop: ($(element).offset().top) - 60
    }, 'slow')
}
$('.content__li--frontend').on('click', () => {
    scrollTo('.content__title--frontend')
})
$('.content__li--backend').on('click', () => {
    scrollTo('.content__title--backend')
})
$('.content__li--db').on('click', () => {
    scrollTo('.content__title--db')
})

function showHobby(element) {
    $('.content__hobby').addClass('hidden')

    $(element).removeClass('hidden')
    $(element).css("visibility", "visible")
}
$('.content__li--gaming').on('click', () => {
    showHobby('.content__gaming')
})
$('.content__li--books').on('click', () => {
    showHobby('.content__books')
})
$('.content__li--persdev').on('click', () => {
    showHobby('.content__persdev')
})