const music = new Audio();
music.src= "./sound-effects/musicafondo.mp3";
let play = true;

document.addEventListener('DOMContentLoaded', () => {
    music.play();
});

function stopMusic() {
    if (play == true) {
        music.pause();
        play = false;
        document.querySelector(".control-music").classList.add("stop");
    }
    else {
        music.play();
        play=true;
        document.querySelector(".control-music").classList.remove("stop");

    }
}
window.onload = (event) => {
    "use strict";

    const MEDIDA_CUADRO = 66;
    let fichaActual = null;
    let arrFichas = [];
    // let arrImgs = [];
    let fichasTotales = 0;
    let tamanioTablero = 0;
    let posXIniTablero = 0;
    let posXFinTablero = 0;
    let xI = 0;
    let yI = 0;
    let contadornum = -1;

    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext("2d");


    // Se empezo usando clases, pero no funcionaba la implementacion por lo que los getter y setter quedaron

    let fichaPosX, fichaPosY, color, jugador, img, imgS, imgW;
    const getFicha = ({ radio = 30, enTablero = false, ganadora = false, seleccionada = false }) => ({
        fichaPosX,
        fichaPosY,
        radio,
        color,
        jugador,
        enTablero,
        ganadora,
        img,
        imgS,
        imgW,
        seleccionada,

        getX() {
            return this.fichaPosX;
        },
    
        setX(x) {
            this.fichaPosX = x;
        },
    
        getY() {
            return this.fichaPosY;
        },
    
        setY(y) {
            this.fichaPosY = y;
        },
    
        getJugador() {
            return this.jugador;
        },
    
        setJugador(j) {
            this.jugador = j;
        },
    
        getEnTablero() {
            return this.enTablero;
        },
    
        setEnTablero(b) {
            this.enTablero = b;
        },
    
        getColor() {
            return this.color;
        },
    
        getGanadora() {
            return this.ganadora;
        },
    
        setGanadora(b) {
            this.ganadora = b;
        },
    
        getSeleccionada() {
            return this.seleccionada;
        },
    
        setSeleccionada(seleccionada) {
            this.seleccionada = seleccionada;
        },

        clickInside(x, y) { //devuelve si se hizo click dentro de la ficha
            let dx = Math.abs(x - this.getX());
            let dy = Math.abs(y - this.getY());
            let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            if (distance <= this.radio) {
                return true;
            } else {
                return false;
            }
        },

        drawFicha(ctx) { //dibuja la ficha
            //console.log(this.img);
            if (this.getSeleccionada()) {
                ctx.drawImage(this.imgS, this.fichaPosX - this.radio, this.fichaPosY - this.radio);
            } else {
                ctx.drawImage(this.img, this.fichaPosX - this.radio, this.fichaPosY - this.radio);
            }
        },
    
        drawFichaEn(ctx, x, y) { //dibuja la ficha en la pos indicada
            if (this.getGanadora()) {
                ctx.drawImage(this.imgW, x - this.radio, y - this.radio);
            } else {
                ctx.drawImage(this.img, x - this.radio, y - this.radio);
            }
        }
    })


   let tableroMatTablero;
    const getTablero = () => ({
        tableroMatTablero,

        cargarTablero() { // Carga tablero de juego, donde van cargando las fichas
            tableroMatTablero = new Array(tamanioTablero);
            for (let i = 0; i < tableroMatTablero.length; i++) {
                tableroMatTablero[i] = new Array(tamanioTablero);
                for (let j = 0; j < tableroMatTablero[i].length; j++) {
                    //console.log('[' + i + ', ' + j + ']');
                    tableroMatTablero[i][j] = null;
                }
            }
            // console.log(tableroMatTablero); 
        },
    
        getMatTablero() {
            return tableroMatTablero;
        },
        
        agregarficha(ficha, x, arrFichas, turno) { // Agrega ficha a la matriz
            // console.log("Pos inicial: "+posXIniTablero, "Pos final: " + posXFinTablero)
            // if((x < posXIniTablero + 110) && (x > posXIniTablero + 70)){
            //     x = x-20;
            // }else 
            // if ((x < posXFinTablero-10) && (x > posXFinTablero - 66)){
            //     x = x+20;
            // }
            if (x > posXIniTablero+200){
                x = x+30;
            }
            for (let i = 0; i < tamanioTablero; i++) {
                if (x < (posXIniTablero+56 + (70 * (i + 1)))) {
                    for (let j = tableroMatTablero[i].length - 1; j >= 0; j--) {
                        if (tableroMatTablero[i][j] == null) {
                            tableroMatTablero[i][j] = ficha;
                            ficha.setEnTablero(true);
                            if (turno == 1) {
                                this.eliminarFicha(arrFichas);
                                return 2;
                            } else {
                                this.eliminarFicha(arrFichas);
                                return 1;
                            }
                        }
                    }
                    break;
                }
            }
            this.eliminarFicha(arrFichas);
        },
    
        eliminarFicha(arrFichas) { // Elimina ficha de arreglo de las fichas totales
            for (let i = 0; i < arrFichas.length; i++) {
                // console.log(arrFichas[i].getEnTablero());
                if (arrFichas[i].getEnTablero()) {
                    arrFichas.splice(i, 1);
                    break;
                }
            }
        },

        enDropZone(x, y) {  // Verifica que se suelte la ficha dentro del tablero
            if (((x - MEDIDA_CUADRO) > posXIniTablero) && ( x < posXFinTablero) && (y < (posXFinTablero - MEDIDA_CUADRO)) && (y - 10 > posXIniTablero)) {
                return true;
            } else {
                return false;
            }
        },

        drawTablero() { // Dibuja el tablero/matriz donde se van las fichas agregando mediante el juego
            let x, y;
            for (let i = 0; i < tamanioTablero; i++) {
                x = (posXIniTablero + (66 * i))+50;
                for (let j = 0; j < tamanioTablero; j++) {
                    y = posXIniTablero + (65 * j);
                    if (tableroMatTablero[i][j] != null) {
                        if(tableroMatTablero[i][j].color != "Rojo"){
                            tableroMatTablero[i][j].drawFichaEn(ctx, (x+30), (y+33));
                        } else{
                            tableroMatTablero[i][j].drawFichaEn(ctx, (x+33), (y+33));
                        }
                    }
                    // ctx.strokeStyle = "#000000";
                    // ctx.strokeRect(x, y, 66, 66);
                }
            }
        }
    })

    const tablero = getTablero();

    function canvasDraw(filcol) { // Dibuja el tablero de fondo

        let imageFondo = new Image();
        imageFondo.src = "imgs/4-en-linea/cbox.png";

        let drop = new Image();
        drop.src = "imgs/4-en-linea/drop.png";

        let matrix = crearMatrizIdentidad(filcol, imageFondo);

        // console.log(matrix);
        // console.log(((canvas.width / 2) - (filcol/2)*MEDIDA_CUADRO));
        
        
        // Comenzar a dibujar
        let PosInicialTableroY = (((canvas.width-100) / 2) - (filcol/2)*MEDIDA_CUADRO), 
            PosInicialTableroX = (canvas.height / 2- (filcol/2)*MEDIDA_CUADRO), 
            x = PosInicialTableroX, 
            y = PosInicialTableroY;

        for (const fila of matrix) {  //Dibuja el tablero
            x = ((canvas.height+100) / 2- (filcol/2)*MEDIDA_CUADRO);
            for (const cuadro of fila) {
                ctx.drawImage(imageFondo, x, y);
                x += MEDIDA_CUADRO;
            }
            y += MEDIDA_CUADRO-1;
        }

        posXIniTablero = PosInicialTableroX;
        posXFinTablero = x;
        // ctx.drawImage(drop, PosInicialTableroX , PosInicialTableroY - 80);
        // -------------------------------------------------------------------------------------------------

        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        ctx.font = '40pt Kremlin Pro Web';
        ctx.fillStyle = '#f00';
        if (contadornum === -1){
            ctx.fillText('Start', 350, 150);
        }else {
            ctx.fillText('Start '+contadornum, 350, 150);
        } 
    }

    function cargarFichasEnArreglo(filcol) {  // Carga las fichas en un arreglo
        let imageFichaAmarilla = new Image();
        imageFichaAmarilla.src = "imgs/4-en-linea/fichaAmarilla.png";

        let imageFichaRoja = new Image();
        imageFichaRoja.src = "imgs/4-en-linea/fichaRoja.png";

        let imageFichaAmarillaSelec = new Image();
        imageFichaAmarillaSelec.src = "imgs/4-en-linea/fichaAmarillaSelec.png";

        let imageFichaRojaSelec = new Image();
        imageFichaRojaSelec.src = "imgs/4-en-linea/fichaRojaSelec.png";

        let imageFichaAmarillaWin = new Image();
        imageFichaAmarillaWin.src = "imgs/4-en-linea/fichaAmarillaWin.png";

        let imageFichaRojaWin = new Image();
        imageFichaRojaWin.src = "imgs/4-en-linea/fichaRojaWin.png";

        // let posX, posY, color, jugador, img, imgS;
        for (let index = 0; index < fichasTotales; index++) {
            if (index % 2 == 0) {
                fichaPosX = 90;
                fichaPosY = (((canvas.width-100) / 2) + (filcol/2)*MEDIDA_CUADRO) - (13 * index + 1) - 30;
                    // 690 - (13 * index + 1);
                color = "Rojo";
                img = imageFichaRoja;
                imgW = imageFichaRojaWin;
                imgS = imageFichaRojaSelec;
                jugador = 1;
            } else {
                fichaPosX = canvas.width - 90;
                fichaPosY = (((canvas.width-100) / 2) + (filcol/2)*MEDIDA_CUADRO) - (13 * index + 1) - 30;
                    // 700 - (13 * index + 1);
                color = "Amarillo";
                img = imageFichaAmarilla;
                imgW = imageFichaAmarillaWin;
                imgS = imageFichaAmarillaSelec;
                jugador = 2;
            }
            let ficha = getFicha(fichaPosX, fichaPosY, color, jugador, img, imgS);
            arrFichas.push(ficha);
        }

        for (let index = 0; index < fichasTotales; index++) {
            arrFichas[index].drawFicha(ctx);
        }

    }

    function crearMatrizIdentidad(filcol, imageFondo) {  //Crea la matriz del tablero
        let matrizIdentidad = [];
    
        for (let i = 0; i < filcol; i++) {
            let fila = [];
            for (let j = 0; j < filcol; j++) {
                    fila.push(imageFondo);
            }
            matrizIdentidad.push(fila);
        }
        return matrizIdentidad;
    }

    function cleanCanvas() { //setea el canvas en blanco, limpia
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        canvas.width=canvas.width;
    }

    function hayGanador() { // Verifica si hay ganador
        let matriz = tablero.getMatTablero();
        let largo = matriz.length;
        let alto = matriz[0].length;
        let jugador;
        let ganador = false;

        for (let i = 0; i < largo; i++) {
            for (let j = 0; j < alto; j++) {
                if (matriz[i][j] != null) {
                    jugador = matriz[i][j].getJugador();
                    ganador = evaluar(jugador, matriz, i, j, largo, alto);
                    if (ganador.length != 0) {
                        matriz[i][j].setGanadora(true);
                        for (let index = 0; index < ganador.length; index++) {
                            ganador[index].setGanadora(true);
                        }
                        return true;
                    }
                }
            }
        }
        return false;
    }

    function evaluar(jugador, matriz, i, j, largo, alto) { // Evalua si hay 4 en linea
        let pos = 1;
        let win = false;
        let arr = [];

        if (!win) {
            for (let index = 0; index < (tamanioTablero-2); index++) { //vertical
                let x = i;
                let y = j - (index + 1);
                if (x < largo && x > -1 && y < alto && y > -1 && matriz[x][y] != null && matriz[x][y].getJugador() == jugador) {
                    pos++;
                    arr.push(matriz[x][y]);
                } else {
                    if (pos < (tamanioTablero-2)) {
                        arr = [];
                        pos = 1;
                        break;
                    }
                }
            }
            if (pos == (tamanioTablero-2)) {
                return arr;
            }
            for (let index = 0; index < (tamanioTablero-2); index++) { //horizontal
                let x = i - (index + 1);
                let y = j;
                if (x < largo && x > -1 && y < alto && y > -1 && matriz[x][y] != null && matriz[x][y].getJugador() == jugador) {
                    pos++;
                    arr.push(matriz[x][y]);
                } else {
                    if (pos < (tamanioTablero-2)) {
                        arr = [];
                        pos = 1;
                        break;
                    }
                }
            }
            if (pos == (tamanioTablero-2)) {
                return arr;
            }
            for (let index = 0; index < (tamanioTablero-2); index++) { //diag izq
                let x = i - (index + 1);
                let y = j - (index + 1);
                if (x < largo && x > -1 && y < alto && y > -1 && matriz[x][y] != null && matriz[x][y].getJugador() == jugador) {
                    pos++;
                    arr.push(matriz[x][y]);
                } else {
                    if (pos < (tamanioTablero-2)) {
                        arr = [];
                        pos = 1;
                        break;
                    }
                }
            }
            if (pos == (tamanioTablero-2)) {
                return arr;
            }
            for (let index = 0; index < (tamanioTablero-2); index++) { //diag der
                let x = i + (index + 1);
                let y = j - (index + 1);
                if (x < largo && x > -1 && y < alto && y > -1 && matriz[x][y] != null && matriz[x][y].getJugador() == jugador) {
                    pos++;
                    arr.push(matriz[x][y]);
                } else {
                    if (pos < (tamanioTablero-2)) {
                        arr = [];
                        pos = 1;
                        break;
                    }
                }
            }
            if (pos == (tamanioTablero-2)) {
                return arr;
            }
        }
        return [];
    }

    var rect = {
        x:100,
        y:50,
        width:200,
        height:100
    };

    function DentroDeButton(pos, rect){
        return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
    }

    canvas.addEventListener('click', function(evt) {
        var mousePos = getMousePos(canvas, evt);
    
        if (DentroDeButton(mousePos,rect)) {
            alert('Hice click en el boton');
        }
    }, false);

    // function RenderCont(){
    //     ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    //     ctx.font = '40pt Kremlin Pro Web';
    //     ctx.fillStyle = '#f00';
    //     contadornum++;
    //     ctx.fillText('Start'+contadornum, 345, 415);
    // }

    function getMousePos(canvas, event) { //devuelve la posicion del click en el canvas
        let rect = canvas.getBoundingClientRect();
        return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    }

    let turno = 1;
    let ganador = false;
    canvas.onmouseup = function(event) {
        let pos = getMousePos(canvas, event);
        if (fichaActual != null) {
            // console.log(fichaActual);
            fichaActual.setSeleccionada(false);

            requestAnimationFrame(actualizar);
        }
        console.log(pos.x, pos.y);

        
        if (tablero.enDropZone(pos.x, pos.y) && (fichaActual != null) && (!ganador)) {
            turno = tablero.agregarficha(fichaActual, pos.x, arrFichas, turno);
            // if (fichaActual.getColor() == "Rojo") {
            //     indicador.innerHTML = "Turno Jugador Azul";
            // } else {
            //     indicador.innerHTML = "Turno Jugador Rojo";
            // }
            requestAnimationFrame(actualizar);
            if (hayGanador()) {
                setTimeout(() => {
                    alert("Delayed for 1 second.");
                }, 1000)
                ganador = true;
                clearInterval(chronometerCall);
            }
            

        } else if (fichaActual != null) {
            fichaActual.setX(xI);
            fichaActual.setY(yI);
            requestAnimationFrame(actualizar);

        }
        fichaActual = null;
    }

    canvas.onmousedown = function(event) { //verifica si se hizo click en una ficha
        let pos = getMousePos(canvas, event);

        for (let i = 0; i < arrFichas.length; i++) {
            if (arrFichas[i].clickInside(pos.x, pos.y) && (!arrFichas[i].getEnTablero()) && (arrFichas[i].getJugador() == turno) && (!ganador)) {
                fichaActual = arrFichas[i];
                xI = fichaActual.getX();
                yI = fichaActual.getY();
                fichaActual.setSeleccionada(true);
                requestAnimationFrame(actualizar);
                break;
            }
            // console.log(arrFichas[i].clickInside(pos.x, pos.y));
        }
    }

    canvas.onmousemove = function(event) { //mueve el punto en el canvas o la figura
        let pos = getMousePos(canvas, event);

        if (fichaActual != null) {
            fichaActual.drawFicha(ctx);
            fichaActual.setX(pos.x);
            fichaActual.setY(pos.y);
            requestAnimationFrame(actualizar);
        }
    }

    function actualizar() { //funcion q refresca el canvas en cada evento
        cleanCanvas();
        canvasDraw(tamanioTablero);
        tablero.drawTablero();
        for (let index = 0; index < arrFichas.length; index++) {
            arrFichas[index].drawFicha(ctx);
        }
    }

    function chronometer() {

        contadornum++;
        requestAnimationFrame(actualizar);
    
    }
    let filcolumns = 0;
    document.getElementById("jugar").addEventListener("click", ()=>{ 
        const play_game = new Audio();
        play_game.src= "./sound-effects/play.mp3";  
        play_game.play();
        setTimeout(() => {
            document.querySelector(".contenedor-form-game").style.display = "none";
        }, 300)
        setTimeout(() => {
            document.querySelector(".reiniciar").style.display ="flex";
            document.querySelector(".canvasDibujo").style.display = "flex";
        }, 1000)
        
        let radios = document.getElementsByName('dificultad');
        for (let i = 0; i <  radios.length; i++) {
          if (radios[i].checked) {
           filcolumns = radios[i].value;
            break;
          }
        }


         // Funcion donde se inicia el juego
        // cargarImgs();
        arrFichas = [];
        let filcol = parseInt(filcolumns) + parseInt(2);
        fichasTotales = (filcol*filcol)/2;
        tamanioTablero = filcol;
        cleanCanvas();
        cargarFichasEnArreglo(filcol);
        tablero.cargarTablero();
        canvasDraw(filcol);
        chronometerCall = setInterval(chronometer, 1000);
    });

    document.getElementById("reiniciar").addEventListener("click", ()=>{
        cleanCanvas();
        xI = 0;
        yI = 0;
        arrFichas.splice(0, arrFichas.length);
        turno = 1;
        ganador = false;
        let filcol = parseInt(filcolumns) + parseInt(2);
        fichasTotales = (filcol*filcol)/2;
        tamanioTablero = filcol;
        cargarFichasEnArreglo(filcol);
        tablero.cargarTablero();
        canvasDraw(filcol);
        contadornum = -1;
    });

};



