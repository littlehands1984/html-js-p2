let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio';

function mensajeBoton(){
    alert('Has hecho click en el botón.');
}
function ciudadBrasil(){
    ciudad = prompt('Dame el nombre de una ciudad de Brasil: ');
    alert(`Estuve en ${ciudad} y me acorde de ti.`);
}
function alertaJS(){
    alert('Yo amo JS.');
}
function sumaDosNumeros(){

    num1 = parseFloat(prompt('Ingresa el primer número para sumar: '));
    num2 = parseFloat(prompt('Ingresa el segundo número para sumar: '));
    
    resultado = num1 + num2;
    alert(`El resultado de sumar ${num1} + ${num2} es: ${resultado}.`);
}
