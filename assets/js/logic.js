$(document).ready(function(){
	$('.burger-container').click(function(){
        $(this).toggleClass('open');
        $('.menu-navbar').toggleClass('open');
        $('body').toggleClass('scroll');
	});
});

var controller = new ScrollMagic.Controller();

$(".start").each(function() {
        start = new ScrollMagic.Scene({triggerElement: this}).triggerHook(0.5).on("enter",(e)=>{$('.share-side').addClass('open').removeClass('close');$('.section-link').addClass('open').removeClass('close')}).on("leave",(e)=>{$('.share-side').addClass('close').removeClass('open');$('.section-link').addClass('close').removeClass('open')}).addTo(controller);
});
$(".end").each(function() {
        end = new ScrollMagic.Scene({triggerElement: this}).triggerHook(1).on("enter",(e)=>{$('.share-side').addClass('close').removeClass('open');$('.section-link').addClass('close').removeClass('open')}).on("leave",(e)=>{$('.share-side').addClass('open').removeClass('close');$('.section-link').addClass('open').removeClass('close')}).addTo(controller);
});

function readmore(e) {
        $(e).toggleClass('close');
        $('.box-inner, .more-btn').toggleClass('close');
}