

const circle = document.querySelector('#circulo');
const rectangulos = document.querySelectorAll('.rectangulo__shape');
console.log(rectangulos);


circle.addEventListener ('click', ocultarCuadrados)


function ocultarCuadrados(){

    rectangulos.forEach(rectangulo => {
    rectangulo.style.opacity="0"
    });
}