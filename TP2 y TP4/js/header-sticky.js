var header = document.getElementById('sticky');


onScroll = () => {
  var scrolledPage = Math.round(window.pageYOffset);
  if(scrolledPage > 10) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}


document.addEventListener('scroll', onScroll);



    var logo = document.querySelector('.nav-logo');
    let prevY = window.scrollY; //Posicion del scroll al inicio
    //Detecto la posicion del scroll
    window.addEventListener('scroll', function(){
        if(prevY > window.scrollY) { //si sube
          header.classList.remove('reduce');
        } else { //baja el scroll
          header.classList.add('reduce');
        }
        prevY = window.scrollY; //seteo la posicion del scroll
    })
    