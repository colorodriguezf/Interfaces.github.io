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
    