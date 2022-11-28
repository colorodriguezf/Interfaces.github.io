"use strict"
document.getElementById("img-perfil").addEventListener("click", toggleModalPerfil);
document.getElementById("drop-categories").addEventListener("click", dropCategories);

function toggleModalPerfil() {
    document.getElementById("modal-perfil").classList.toggle("modal-perfil-none");
} 

function dropCategories() {
    let m = document.getElementById("myDropdown")
    m.classList.toggle("show");
    let contador = 0;
    let prueba = setInterval(function() {
        if(contador < 10){
            document.getElementById("myDropdown").childNodes[(contador*2)+1].classList.toggle('showItem');
            contador++;
        }
    }, 50);
}
    
// Para que se cierre el menu categorias cuando se hace click afuera
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let btnHamb = document.getElementById('menu_on');

btnHamb.onclick = function(){
  btnHamb.classList.toggle("visible_menu");
};

let autoIzq = document.querySelector(".autoIzq");
let autoDer = document.querySelector(".autoDer");
window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 600) {
        autoDer.hidden = false;
        autoIzq.style.left = window.pageYOffset - 100 + "px";
        autoDer.style.left = -window.pageYOffset + 1550 + "px";
    }
});



//Punto 5
const imagenParallax = document.getElementById('imagenParallax');
const pParallax = document.getElementById('pParallax');

window.addEventListener("scroll", function() {
    console.log(pParallax.clientHeight);
    if (document.documentElement.scrollTop > 1 && document.documentElement.scrollTop < 600) {
        imagenParallax.style.height =imagenParallax.clientWidth - window.pageYOffset + "px";
        pParallax.style.height =pParallax.clientHeight - 0.5 + "px";

    }
});


