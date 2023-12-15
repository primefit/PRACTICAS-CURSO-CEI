const images = [

    "img/ciudadano.jpeg",

    "img/hoyo.jpeg",

    "img/num23.jpeg",

    "img/venganza.jpeg",

    "img/blackjack.jpeg",

    "img/pacto.jpeg",

    "img/infierno.jpeg",

    "img/invicto.jpeg"



]

//*ALGORITMO: HACER QUE CUANDO EL BOTON 1 SEA PULSADO CAMBIE LA FOTO*//

// 1. CAPTURAR TODOS LOS ELEMENTOS QUE VAN A PARTICIPAR EN EL PROGRAMA*//

// CAPTURAR BOTON//
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');


const btnonof = document.querySelector('tv__buttons-on-off');


//CAPTURAR FOTO//
const tvimg= document.querySelector('#tvimg');


// 2. APLICAR EL EVENTO AL ELEMENTO QUE YO QUIERA( O QUE ME DIGA LA TAREA)*//

btn1.addEventListener('click', cambiarCanal);
btn2.addEventListener('click', cambiarCanal);
btn3.addEventListener('click', cambiarCanal);
btn4.addEventListener('click', cambiarCanal);
btn5.addEventListener('click', cambiarCanal);
btn6.addEventListener('click', cambiarCanal);
btn7.addEventListener('click', cambiarCanal);
btn8.addEventListener('click', cambiarCanal);
btnonoff.addEventListener('click', apagarTele);


// 3. DEFINIR LA FUNCION QUE VA EJECUTAR EL EVENTO*//

function cambiarCanal(){

    tvimg.src = images[this.dataset.number];
    
}


function apagarTele(){
    tvimg.classList.toggle('turn--off');
}

// 4. PROGRAMAR VA A HACER LA FUNCION SOBRE LOS ELEMENTOS QUE YO LE DIGA*//


