let btnShop = document.getElementById('btn-buy-game');
let svgCart = document.getElementById('svg-cart');
let svgTick = document.getElementById('svg-tick');

document.getElementById('btn-buy-game').addEventListener('click', function(e) {
    if(btnShop.classList.contains( 'btn-buy-game' )) {
        btnShop.classList.remove('btn-buy-game');
        btnShop.classList.add('btn-buy-game-tick');
        svgCart.style.display = 'none';
        svgTick.style.display = 'block';
    } else {
        btnShop.classList.remove('btn-buy-game-tick');
        btnShop.classList.add('btn-buy-game');
        svgTick.style.display = 'none';
        svgCart.style.display = 'block';
    }
});

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