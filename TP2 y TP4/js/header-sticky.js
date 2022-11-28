let navHeader = document.getElementById('nav-container');
let navLogo = document.getElementById('nav-logo');
let navCart = document.getElementById('nav-cart');



window.addEventListener("scroll", function (){
  navHeader.classList.toggle("scrolling", window.scrollY>0);
  navLogo.classList.toggle("nav-logo-sticky", window.scrollY>0);
  navCart.classList.toggle("nav-cart-sticky", window.scrollY>0);
});
