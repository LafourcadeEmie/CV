document.getElementById("all").ontouchend = retracte;

function retracte() {
    if (window.matchMedia('(max-width: 1350px)').matches) {
        console.log($(e.target)[0].id);
        if (!$(e.target).is('#menuDeroulant'))
            document.getElementById("menu").style.display = "none";
    }
}

window.onscroll = function () { scrollbar() };

function scrollbar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

$('a[href^="#"]').click(function () {
    var id = $(this).attr("href");
    if (window.matchMedia('(max-width: 1350px)').matches) {
        var offset = $(id).offset().top;
    }
    else {
        var offset = $(id).offset().top - 50;
    }
    $('html, body').animate({ scrollTop: offset }, 'slow');
    return false;

});

$(window).on("load", function () {
    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();

        $(".imgprojet").each(function () {
            var objectBottom = $(this).offset().top + 200;
            fadeFunc($(this), objectBottom, windowBottom);
        });

        $(".fade").each(function () {
            var objectBottom = $(this).offset().top + 60;
            fadeFunc($(this), objectBottom, windowBottom);
        });

        // $(".divInformations").each(function () {
        //     var objectBottom = $(this).offset().top + 400;//$(this).outerHeight();
        //     fadeFunc($(this), objectBottom,windowBottom)
        // });


    }).scroll();
});


function fadeFunc(obj, objectBottom, windowBottom) {
    if (objectBottom < windowBottom) {
        if (obj.css("opacity") == 0) { obj.fadeTo(500, 1); }
    }
}

$(function () {


    function loadBars(cat) {
        var chemin = `${cat}>.comPart > #progressComp`;
        $(`${chemin} > .progress-bar`).each(function () {
            var w = (($(this).width() / $(chemin).width()) * 100);
            $(this)
                .data("origWidth", `${w}%`)
                .width(0)
                .animate({
                    width: $(this).data("origWidth")
                }, 1200);
        });
    }


    $(document).on('scroll.s1', function () {

        var scrollOffset = $(document).scrollTop();
        var containerOffset = $(".LP").offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadBars(".LP");
            $(document).off('scroll.s1');
        }
    });

    $(document).on('scroll.s2', function () {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $(".autre").offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadBars(".autre");
            $(document).off('scroll.s2');
        }
    });


    $(document).on('scroll.s3', function () {
        var scrollOffset = $(document).scrollTop();

        var containerOffset = $(".langues").offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadBars(".langues");
            $(document).unbind('scroll.s3');
        }
    });


});

$(document).ready(function () {
    // $("html, body").animate({scrollTop : 0}, 1500);
    $(this).scrollTop(0);

    // location.reload();



    var uri = window.location.toString();
    if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("#"));
        window.history.replaceState({}, document.title, clean_uri);
    }
});

// var lang = false;
// var tab = document.getElementsByClassName("en");
// for (var i = 0; i < tab.length; i++) {
//     tab[i].style.display = "none";
// }

// function myFunction() {
//     lang = !lang;
//     console.log(lang);
//     if (lang) {

//         var tab = document.getElementsByClassName("fr");
//         for (var i = 0; i < tab.length; i++) {
//             tab[i].style.display = "none";
//         }

//         tab = document.getElementsByClassName("en");
//         for (var i = 0; i < tab.length; i++) {
//             tab[i].style.display = "unset";
//         }
//     }

// else
//     {
//         var tab = document.getElementsByClassName("fr");
//         for (var i = 0; i < tab.length; i++) {
//             tab[i].style.display = "unset";
//         }

//         tab = document.getElementsByClassName("en");
//         for (var i = 0; i < tab.length; i++) {
//             tab[i].style.display = "none";
//         }
//     }

// }