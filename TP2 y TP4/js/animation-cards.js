// let padre = document.getElementsByClassName('contenedor-cards-informativas');
// let child1 = padre[0].children[0];
// let child2 = padre[0].children[1];
// let child3 = padre[0].children[2];

const child1 = document.getElementById('card1');
const child2 = document.getElementById('card2');
const child3 = document.getElementById('card3');

// console.log(padre[0].children)

const cargarImagen = (entradas, observador) => {
	console.log(entradas)
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
	rootMargin: '0px 0px 0px 0px',
	threshold: 1.0
});

observador.observe(child1);
observador.observe(child2);
observador.observe(child3);