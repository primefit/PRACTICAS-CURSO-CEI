//1. captruar elementos//

const btnFlechas = document.querySelector('.btnFlechas'); // capturar boton//
const fotoVoldemort = documen.querySelector('#voldemort'); //capturar foto//


//2.Crear eventos de ususario//
btnFlechas.addEventListener('click',cambiarFoto ) //para hacer click//


//3.Crear funcion que sucedera al ejecutar el evento//
let imageCounter= 1;




function cambiarFoto(){

    imageCounter = imageCounter+1;  // sumo 1 a image counter

    if(imageCounter== 4){
        imageCounter=1;      //Como hay 3 imagenes ponemos 4 para que el programa no se rompa
     }

    fotoVoldemort.src= "img_voldemort/" + imageCounter + ".jpg";

}
