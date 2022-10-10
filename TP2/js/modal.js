var modal = document.getElementById("myModal");

var btn = document.getElementById("openModal");

var btnAddCartAccept = document.getElementById('btn-accept');

var span = document.getElementsByClassName("close")[0];


const buttonsModal = document.querySelectorAll('button'); 
buttonsModal.forEach(e => e.addEventListener('click', function(){ 
    if(e.id == 'btn-buy-game'){
        if(e.className == 'btn-buy-game'){
          modal.style.display = "block";
        }
      }
    }
));

if (btn){
  btn.onclick = function() {
  modal.style.display = "block";
  }
}

// if(btnCart){
//   btnCart.onclick = function() {
//   modal.style.display = "block";
//   }
// }

if (btnAddCartAccept){
  btnAddCartAccept.onclick = function(e) {
    modal.style.display = "none";
  }
}

// Cuando aprieta afuera se cierra el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}