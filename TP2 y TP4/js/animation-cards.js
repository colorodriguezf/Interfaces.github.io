// const child1 = document.getElementById('card1');
const child2 = document.getElementById('card2');
const child3 = document.getElementById('card3');

// console.log(padre[0].children)

const cargarImagen = (entradas, observador) => {  // Cuando entre el div en pantalla, estos se muestra y cuandoi salen de la vision se sacan
	// console.log(entradas)
	// console.log(observador)

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		} else {
			entrada.target.classList.remove('visible');
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '0px',
	threshold: 0.5
});

// observador.observe(child1);
observador.observe(child2);
observador.observe(child3);

// ---------------------------------------------------------------------------------------------------------------------------

const historia1 = document.getElementById('historia1');
const historia2 = document.getElementById('historia2');
const historia3 = document.getElementById('historia3');

window.addEventListener("scroll", function() {  // Segun el scroll en pantalla muestra un div y/o lo saca
	if(this.scrollY > 2200 && this.scrollY < 2900){
		historia1.classList.add('visible');
	} else{
		historia1.classList.remove('visible');
	}

	if(this.scrollY > 2900 && this.scrollY < 3500){
		historia2.classList.add('visible');
	}else {
		historia2.classList.remove('visible');
	}
	if(this.scrollY > 3500 && this.scrollY > 2900){
		historia3.classList.add('visible');
	} else {
		historia3.classList.remove('visible');
	}
});