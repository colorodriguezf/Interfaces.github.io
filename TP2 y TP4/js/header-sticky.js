var header = document.getElementById('sticky');



    var logo = document.querySelector('.nav-logo');
    let prevY = window.scrollY; //Posicion del scroll al inicio
    //Detecto la posicion del scroll
    window.addEventListener('scroll', function(){
        if(prevY >= window.scrollY +10) { //si sube
          header.classList.remove('reduce');
        } else { //baja el scroll
          header.classList.add('reduce');
        }
        prevY = window.scrollY; //seteo la posicion del scroll
    })
    












    //Punto 9, separación entre el título y personajes
    var titulo = document.querySelector("#titulo-efecto");
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