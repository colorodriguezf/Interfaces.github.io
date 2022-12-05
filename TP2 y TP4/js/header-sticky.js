let navHeader = document.getElementById('nav-container');
let navLogo = document.getElementById('nav-logo');
let navCart = document.getElementById('nav-cart');

window.addEventListener("scroll", function (){
  navHeader.classList.toggle("scrolling", window.scrollY>0);
  navLogo.classList.toggle("nav-logo-sticky", window.scrollY>0);
  navCart.classList.toggle("nav-cart-sticky", window.scrollY>0);
});





    //Punto 9, separación entre el título y personajes
    var titulo = document.getElementById("titulo-efecto");
    titulo.style.opacity = 0.1;
    var distance=0;
    var movimiento = 100
    titulo.style.transform = `translateY(-${movimiento*2}px)`;

    window.addEventListener("scroll", function(){
    var windowHeight = window.innerHeight;
    var elementTop = titulo.getBoundingClientRect().top;
    var elementVisible = 400;
    var distanceNow = window.scrollY;

    if(elementTop < (windowHeight - elementVisible) && titulo.style.opacity<1 && distanceNow>distance && movimiento>0){
        titulo.style.opacity = titulo.style.opacity*1.2;
        titulo.style.transform = `translateY(-${movimiento*2}px)`;
        movimiento = movimiento -2;
    }else if (elementTop > (windowHeight - elementVisible) && distanceNow<distance && titulo.style.opacity>0.1){
        titulo.style.opacity = titulo.style.opacity*0.9;
        titulo.style.transform = `translateY(-${movimiento*2}px)`;
        movimiento = movimiento +2;
    }

    if (movimiento>30){
        movimiento = 30;
    }

    distance=distanceNow;

});
