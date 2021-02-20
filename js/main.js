$('.owl-carousel-intro').owlCarousel({
    loop: true,
    // dots: true,
    items: 1,
    nav: false,
    dots: false,
})

$('.owl-carousel-partners').owlCarousel({
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
    autoplayTimeout: 2000,
    navText: ["<img src='img/main/prev.png'>", "<img src='img/main/next.png'>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

$('.owl-carousel-news').owlCarousel({
    loop: true,
    items: 3,
    // nav: true,
    dots: false,
    // center: true,
    navText: ["<img src='img/main/prevArrow.png' id='prev'>", "<img src='img/main/nextArrow.png' id='next'>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

//===============================Sticky Navbar

window.onscroll = function () {
    myFunction()
};

let nav = document.querySelector(".header__nav");

let fixed = nav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= fixed) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}

//===================================Smooth Link

$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});