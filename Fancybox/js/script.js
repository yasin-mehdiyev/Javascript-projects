$(document).ready(function () {


    // Slider click event
    $(".slider a").click(function (e) {
        e.preventDefault();

        $(this).addClass("active");

        // Sekillerin acilmasi prosesi(atribut mentiqi ile)
        $(".popup").find("img").attr("src", $(this).attr("href"));

        // Spanin text-nin deyisdirilmesi
        $(".popup .info span").eq(1).text($(this).attr("title"));
        $(".popup .info span").eq(0).text((($(this).index()) + 1) + "/" + $(".slider a").length);

        // Seklin effektle acilaraq zincirleme(chaining) mentiqi ile display none dan flex olunmasi
        $(".popup").fadeIn(500).css("display", "flex");
    });

    // Times icon click event
    $(".popup .close").click(function (e) {
        e.preventDefault();
        Close();
    });

    // Next icon click event
    $(".popup .next").click(function (e) {
        e.preventDefault();
        Next();
    });

    // Prev icon click event
    $(".popup .prev").click(function (e) {
        e.preventDefault();
        Prev();
    });

    // Close hadisesini heyata kecirecek funksiya
    function Close() {
        $(".slider a.active ").removeClass("active");
        $(".popup").fadeOut(500);
    }

    // Next hadisesini heyata kecirecek funksiya
    function Next() {
        var active = $(".slider a.active");
        if (active.next().length != 0) {
            active.removeClass("active");
            active.next().addClass("active");
            // Sekillerin acilmasi prosesi(atribut mentiqi ile)
            $(".popup").find("img").attr("src", active.next().attr("href"));

            // Spanin text-nin deyisdirilmesi
            $(".popup .info span").eq(1).text(active.next().attr("title"));
            $(".popup .info span").eq(0).text((active.next().index() + 1) + "/" + $(".slider a").length);

            if (!active.next().next().length) {
                $(".popup .next").hide();
            }
            if ($(".slider a.active").prev().length) {
                $(".popup .prev").show();
            }
        }
    }

    // Prev hadisesini heyata kecirecek funksiya
    function Prev() {
        var active = $(".slider a.active");
        if (active.prev().length != 0) {
            active.removeClass("active");
            active.prev().addClass("active");
            // Sekillerin acilmasi prosesi(atribut mentiqi ile)
            $(".popup").find("img").attr("src", active.prev().attr("href"));

            // Spanin text-nin deyisdirilmesi
            $(".popup .info span").eq(1).text(active.prev().attr("title"));
            $(".popup .info span").eq(0).text((active.prev().index() + 1) + "/" + $(".slider a").length);

            if (!active.prev().prev().length) {
                $(".popup .prev").hide();
            }
            if ($(".slider a.active").next().length) {
                $(".popup .next").show();
            }
        }
    }

    // ESC,sag ve sol duymelerinde hereket etmesi eventi
    $(document.body).keydown(function (e) {
        if ($(".popup").css("display") == "flex") {
            if (e.which == 37) {
                Prev();
            }
            if (e.which == 39) {
                Next();
            }
            if (e.which == 27) {
                Close();
            }
        }

    });

    // mouse scrolunun hereket etmesi eventi
    $(document.body).on("mousewheel", function (e) {
        if ($(".popup").css("display") == "flex") {
            if (e.originalEvent.deltaY < 0) {
                Prev();
            }
            else {
                Next();
            }
        }
    })

    $(".popup").click(function(e){
        if($(e.target).hasClass("popup") && ($(e.target).is("div"))){
            Close()
        }
    })
})