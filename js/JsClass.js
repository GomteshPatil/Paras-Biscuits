$(".navbar-nav").on("click", function () {
    $(".nav-item a").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});