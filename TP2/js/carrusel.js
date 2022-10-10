const buttons = document.querySelectorAll('button'); 
buttons.forEach(e => e.addEventListener('click', function(){ 
    if(e.id == 'btn-buy-game'){
        if(e.className == ('btn-buy-game')) {
            e.classList.remove('btn-buy-game');
            e.classList.add('btn-buy-game-tick');
            e.childNodes[1].style.display = 'none';
            e.childNodes[3].style.display = 'block';
        } else {
            e.classList.remove('btn-buy-game-tick');
            e.classList.add('btn-buy-game');
            e.childNodes[3].style.display = 'none';
            e.childNodes[1].style.display = 'block';
        }
    }
}));

function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.card');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,trackWidth,listWidth,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
    else {
        track.style.left = `-${(trackWidth - listWidth)}px`
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
    else {
        track.style.left = `0px`
    }
}