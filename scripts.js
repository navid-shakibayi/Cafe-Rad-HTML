setTimeout(() => {
    document.getElementById("loading-image-container").style.animation = "slideDown 1s forwards";
    document.getElementById("page-content").style.display = "block";
  }, 3000);

$(document).on("click", "#hotDrinkIcon", function () {

    $("html, body").animate({
        scrollTop: $("#hotDrink").offset().top -160
    }, 1000);
});

$(document).on("click", "#browingIcon", function () {

    $("html, body").animate({
        scrollTop: $("#browing").offset().top -160
    }, 1000);
});

$(document).on("click", "#teeIcon", function () {

    $("html, body").animate({
        scrollTop: $("#tee").offset().top -160
    }, 1000);
});

$(document).on("click", "#coldDrinkIcon", function () {

    $("html, body").animate({
        scrollTop: $("#coldDrink").offset().top -160
    }, 1000);
});

$(document).on("click", "#icedCoffeeIcon", function () {

    $("html, body").animate({
        scrollTop: $("#icedCoffee").offset().top -160
    }, 1000);
});

$(document).on("click", "#shakeIcon", function () {

    $("html, body").animate({
        scrollTop: $("#shake").offset().top -160
    }, 1000);
});

$(document).on("click", "#cakeIcon", function () {

    $("html, body").animate({
        scrollTop: $("#cake").offset().top -160
    }, 1000);
});

$(document).on("click", "#friesIcon", function () {

    $("html, body").animate({
        scrollTop: $("#fries").offset().top -160
    }, 1000);
});

$(document).on("click", "#pastaIcon", function () {

    $("html, body").animate({
        scrollTop: $("#pasta").offset().top -160
    }, 1000);
});

$(document).on("click", "#burgureIcon", function () {

    $("html, body").animate({
        scrollTop: $("#burgure").offset().top -160
    }, 1000);
});

$(document).on("click", "#paniniIcon", function () {

    $("html, body").animate({
        scrollTop: $("#panini").offset().top -160
    }, 1000);
});

$(document).on("click", "#pizzaIcon", function () {

    $("html, body").animate({
        scrollTop: $("#pizza").offset().top -160
    }, 1000);
});

$(document).on("click", "#breakfastIcon", function () {

    $("html, body").animate({
        scrollTop: $("#breakfast").offset().top -160
    }, 1000);
});
