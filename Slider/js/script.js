//Slider(SetIntervalli ve mouseoverli slider edeceyik)

var prev = document.querySelector(".slider .prev");
var next = document.querySelector(".slider .next");

// Next buttonuna klik ederken isleyecek gizli funksiya
next.addEventListener("click", function () {
    nextAction();
});

// Previous buttonuna klik ederken isleyecek gizli funksiya
prev.addEventListener("click", function () {
    prevAction();
});

// SettimeInterval- 3 saniyeden bir item deyisir
var SliderInterval = setInterval(() => {
    nextAction();
}, 3000);

//Contentin uzerine geldikde setInterval funksiyasi legv olunur
document.querySelector(".slider .content").addEventListener("mouseover", function () {
    clearInterval(SliderInterval);
});

//Contentin uzerinden cixdiqdan sonra setInterval funksiyasi isleyir
document.querySelector(".slider .content").addEventListener("mouseout", function () {
     SliderInterval = setInterval(() => {
        nextAction();
    }, 3000);
});

// Next Button Funksiyasi
function nextAction() {
    var active = document.querySelector(".slider .content .active");
    active.classList.remove("active");
    if (active.nextElementSibling != null) {
        active.nextElementSibling.classList.add("active");
    }
    else {
        active.parentNode.children[0].classList.add("active")
    }
}

// Previous Button Funksiyasi
function prevAction() {
    var active = document.querySelector(".slider .content .active");
    active.classList.remove("active");
    if (active.previousElementSibling != null) {
        active.previousElementSibling.classList.add("active");
    }
    else {
        var lngth = active.parentNode.childElementCount;
        active.parentNode.children[lngth - 1].classList.add("active");

    }
}