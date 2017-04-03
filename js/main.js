
new WOW().init();


/* Set the width of the side navigation to 250px */
function openNav() {
    var lrg = window.matchMedia("screen and (min-width: 993px)")
    if(lrg.matches)
        document.getElementById("mySidenav").style.width = "380px";
    else
        document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(window).on('scroll', function() {
    var cont_top = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
    $(function check() {

        var nav_header = $("nav-header");
        if(cont_top > 30) {
            document.getElementById("header-color").style.backgroundColor = "white";
            document.getElementById("nav-header").style.paddingTop = "24px";
            document.getElementById("nav-header").style.paddingBottom = "24px";
            document.getElementById("header-color").style.boxShadow = "0 1px 10px rgba(0, 0, 0, 0.15)";

        }
        else{
            document.getElementById("header-color").style.backgroundColor = "transparent";
            document.getElementById("nav-header").style.paddingTop = "44px";
            document.getElementById("nav-header").style.paddingBottom = "44px";
            document.getElementById("header-color").style.boxShadow = "none";
        }
    });
});


// Price Table
var individual_price_table = $(".individual-price-block");
var company_price_table = $(".company-price-block");

$(function () {
$('.switch-toggles').find('.individual').addClass('active');
$('#price_tables').find('.individual').addClass('active');

$('.switch-toggles').find('.individual').on('click', function(){
    $(this).addClass('active');
    $(this).closest('.switch-toggles').removeClass('active');
    $(this).siblings().removeClass('active');
    $(function () {
        setTimeout(function() {
            $(".individual-price-block").css("display", "block");
        }, 500);
        setTimeout(function () {
            $(".company-price-block").css('display',"none");
        }, 500);
    });
    $(".individual-price-block").css("opacity", "1");
    $(".company-price-block").css('opacity',"0");
});

$('.switch-toggles').find('.company').on('click', function(){
    $(this).addClass('active');
    $(this).closest('.switch-toggles').addClass('active');
    $(this).siblings().removeClass('active');
    $(function () {
        setTimeout(function () {
            $(".company-price-block").css('display', "block");
        }
            , 500);
        setTimeout(function () {
            $(".individual-price-block").css('display', "none");
        }
            , 500);
    });
    $(".company-price-block").css('opacity', "1");
    $(".individual-price-block").css('opacity', "0");
});


});

/*
$(window).on('scroll',function(){
    if ($(this).scrollTop() > 100) {

    }
});*/
$(function () {
    $(".fancybox").fancybox();

    $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            nextEffect  : 'none',
            prevEffect  : 'none',
            padding     : 0,
            margin      : [20, 60, 20, 60] // Increase left/right margin
        });
});
