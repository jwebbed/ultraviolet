// Smooth scrollTo
var scrollTo = function(el, off){
$('html, body').animate({
  scrollTop: $(el).offset().top - off
}, 650);
}

$("#header-btn-more").click(function(){ scrollTo("section", 0); });

$("#footer-logo").click(function(){ scrollTo("header", 0); });