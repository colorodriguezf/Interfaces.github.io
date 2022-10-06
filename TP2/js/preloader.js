let spinner = document.querySelector('.loading-spinner');

// setTimeout(() => {
//     spinner.style.display= 'none';
// }, 5000)

window.addEventListener('beforeunload', function() {
    spinner.style.display = "";
});


function moveProgressBar() {
    var width = 5;

    var elem = document.getElementById("barStatus");   
  
    var id = setInterval(frame, 50);
    function frame() {
        if (width >= 100) {
            spinner.style.display= 'none';
        } else {
            width++;
            elem.style.width = width + '%'; 
        }
    }
}

window.onload = moveProgressBar();