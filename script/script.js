const $hamburgerBtn = $('.header__hamburger');
const $menu = $('.header__navigation');
const $btnGoTop = $('.btnGoTop').hide()
const $submenuCV = $('.navigation__submenu--cv').hide();
if ($(window).width() > 700) {
    $menu.show()
} else {
    $menu.hide()
}
$hamburgerBtn.on("click", () => {
    $menu.slideToggle()
})
$(window).on("scroll", (e) => {
    if ($(window).scrollTop() > 400) {
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
    if ($(window).width() > 682) {
        $menu.show()
    } else {
        $menu.hide()
    }
})

function scrollTo(element) {
    $('html, body').animate({
        scrollTop: ($(element).offset().top) - 100
    }, 'slow')
}
$('.content__li--frontend').on('click', () => {
    scrollTo('.skills__image--frontend')
})
$('.content__li--backend').on('click', () => {
    scrollTo('.skills__image--backend')
})
$('.content__li--db').on('click', () => {
    scrollTo('.skills__image--soft')
})

// function showHobby(element) {
//     $('.content__hobby').addClass('hidden')

//     $(element).removeClass('hidden')
//     $(element).css("visibility", "visible")
// }
const $hobbyMenuElements = $(".hobby-nav__li");
const $hobbySections = $(".content__hobby").hide();
$($hobbySections[0]).show()
$hobbyMenuElements.on("click", function () {
    $hobbySections.hide()
    $($hobbySections[$(this).index()]).show()
})
// console.log($hobbyMenuElements[0], $hobbySections[0])
// $('.hobby-nav__li--gaming').on('click', () => {
//     showHobby('.content__gaming')
// })
// $('.hobby-nav__li--books').on('click', () => {
//     showHobby('.content__books')
// })
// $('.hobby-nav__li--persdev').on('click', () => {
//     showHobby('.content__persdev')
// })
$('.navigation__element--with-submenu').on("click", () => {
    $submenuCV.slideToggle()
})


const name = document.querySelector(".home__name");
const surname = document.querySelector(".home__surname");

function nameAnimation() {
    const nameText = ["K", "o", "n", "r", "a", "d"];
    const surnameText = ["O", "l", "c", "h", "a"]
    let nameCounter = 0;
    let surnameCounter = 0;
    let nameInterval = setInterval(() => {
        name.innerText += nameText[nameCounter];
        nameCounter++;
        if (nameCounter == nameText.length) clearInterval(nameInterval)
    }, 200)
    setTimeout(() => {
        let surnameInterval = setInterval(() => {
            surname.innerText += surnameText[surnameCounter]
            surnameCounter++;
            if (surnameCounter == surnameText.length) clearInterval(surnameInterval)
        }, 200)
    }, 2000)
}
if (name != null) {
    nameAnimation()
}