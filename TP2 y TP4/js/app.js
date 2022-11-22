"use strict"

document.getElementById("img-perfil").addEventListener("click", toggleModalPerfil);
document.getElementById("drop-categories").addEventListener("click", dropCategories);

function toggleModalPerfil() {
    document.getElementById("modal-perfil").classList.toggle("modal-perfil-none");
} 

function dropCategories() {
    document.getElementById("myDropdown").classList.toggle("show");
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






let autoIzq = document.querySelector(".autoIzq");
let autoDer = document.querySelector(".autoDer");
window.addEventListener("scroll", function() {
    //console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 600) {
        autoDer.hidden = false;
        autoIzq.style.left = window.pageYOffset - 100 + "px";
        autoDer.style.left = -window.pageYOffset + 1550 + "px";
    }
});