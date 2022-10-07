// const buttonPrev = document.getElementById('button-prev');
// const buttonNext = document.getElementById('button-next');
// const track = document.getElementById('track');
// const slickList = document.getElementById('slick-list');
// const slick = document.querySelectorAll('.slick');

// const slickWidth = slick[0].offsetWidth;

// buttonPrev.onClick = () => Move(1);
// buttonNext.onClick = () => Move(2);

// function Move(value){
//     const trackWidth = track.offsetWidth;
//     const listWidth = slickList.offsetWidth;

//     track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice)

//     if(leftPosition < (trackWidth - listWidth) && value == 2) {
//         track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
//     } else if(leftPosition > 0 && value == 1) {
//         track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
//     }
// }

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

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
    else {
        track.style.left = `-320px`
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        console.log(-1 * (leftPosition + slickWidth));
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
    else {
        track.style.left = `0px`
    }
}