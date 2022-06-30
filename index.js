$(document).ready(function () {

    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: '.slider-nav',
      dots: true,
      arrows: true,
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
    });
  });
  
  
  
  window.onscroll = function () { scrollFunction() };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.padding = "20px 10px";
      document.getElementById("navbar").style.backgroundColor = "LightSeaGreen ";
      document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").style.padding = "50px 10px";
      document.getElementById("logo").style.fontSize = "30px";
      document.getElementById("navbar").style.backgroundColor = "transparent";
  
    }
  
  }