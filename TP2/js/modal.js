var modal = document.getElementById("myModal");

var btn = document.getElementById("openModal");

var span = document.getElementsByClassName("close")[0];



btn.onclick = function() {
  modal.style.display = "block";
}



// Cuando aprieta en la X se cierra el modal, en caso de tener

// span.onclick = function() {
//   modal.style.display = "none";
// }



// Cuando aprieta afuera se cierra el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}