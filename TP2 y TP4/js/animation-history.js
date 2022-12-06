let faders = document.querySelectorAll(".fade-in");
let sliders = document.querySelectorAll(".slide-in");
let slidersUp = document.querySelectorAll(".slide-up");

let historytext1 = document.querySelector("#texto-historia1");
let historytext2 = document.querySelector("#texto-historia2");
let historytext3 = document.querySelector("#texto-historia3");

let historyCard1 = document.querySelector("#card-historia1");
let historyCard2 = document.querySelector("#card-historia2");
let historyCard3 = document.querySelector("#card-historia3");

let ps5 = document.querySelector("#ps5");
let historyImg1 = document.querySelector("#img-historia1");
let historyImg3 = document.querySelector("#img-historia3");
let historyParagraph1 = document.querySelector("#parrafo-historia1");
let historyParagraph3 = document.querySelector("#parrafo-historia3");

window.addEventListener("scroll", scrollAppear);

/*Segun se vayan viendo los elementos (esto se confirma atravez del scroll) se les agrega la clase appear para
que pasen de opacidad 0 a 1 gradualmente*/
function scrollAppear() {
  faders.forEach((fader) => {
    let top = fader.getBoundingClientRect().top;
    let bottom = fader.getBoundingClientRect().bottom;
    let scroll = window.innerHeight - window.innerHeight / 2;
    if (top < scroll) {
      fader.classList.add("appear");
    } else {
      fader.classList.remove("appear");
    }
  });

  sliders.forEach((slider) => {
    let top = slider.getBoundingClientRect().top;
    let bottom = slider.getBoundingClientRect().bottom;
    let scroll = window.innerHeight;
    if (top >= 0 && bottom <= scroll) {
      slider.classList.add("appear");
    }
  });

  let position = window.innerHeight - window.innerHeight / 2;
  let topPosition = historytext1.getBoundingClientRect().top;
  let topPosition1 = historytext2.getBoundingClientRect().top;
  let topPosition2 = historytext3.getBoundingClientRect().top;
  let topPs5 = ps5.getBoundingClientRect().top;

  /*Segun se vayan viendo los elementos se le agrega la clase para que se vean, y cuando los elementos van quedando
  atras se les agrega la clase fade-in para que vayan desapeciendo con su opacidad de 1 a 0 gradualmente*/

  if (topPosition < position) {
    historyCard1.classList.add("showContent");
    historytext1.classList.remove("fade-in");
    if (historyCard2.classList.contains("showContent")) {
      historyCard2.classList.remove("showContent");
      historytext2.classList.add("fade-in");
    }
  } else {
    historyImg1.classList.remove("appear");
    historyParagraph1.classList.remove("appear");
  }

  if (topPosition1 < position) {
    historyCard1.classList.remove("showContent");
    historytext1.classList.add("fade-in");
    historyCard2.classList.add("showContent");
    historytext2.classList.remove("fade-in");
    if (historyCard3.classList.contains("showContent")) {
      historyCard3.classList.remove("showContent");
      historytext3.classList.add("fade-in");
    }
  }

  if (topPosition2 < position) {
    historyCard2.classList.remove("showContent");
    historytext2.classList.add("fade-in");
    historyCard3.classList.add("showContent");
    historytext3.classList.remove("fade-in");
  }

  if (topPs5 < position) {
    historyImg3.classList.remove("appear");
    historyParagraph3.classList.remove("appear");
  }

  slidersUp.forEach((slider) => {
    let top = slider.getBoundingClientRect().top;
    let scroll = window.innerHeight;
    console.log(top)
    if (top < scroll) {
      slider.classList.add("appear");
    }
  });
}