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