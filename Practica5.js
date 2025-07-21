//array
var frutas = ['manzana', 'pera', 'naranja', 'uva', 'Sandia'];
var frutaBuscada = 'naranja';
//console.log(frutas[0]);
//frutas[0] = 'kiwi';
// console.log(frutas[0]);
// frutas.push('Kiwi'); // al final del array
// frutas.unshift('Banana'); // al inicio
// frutas.pop();
// frutas.shift();
// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }
// Notas PARES -- OK
var notas = [10, 15, 25, 63, 12, 58];
for (var i = 0; i < notas.length; i++) {
    if (notas[i] % 2 === 0) {
        console.log("Las notas pares son: " + notas[i]);
    }
}
// Notas IMPARES
for (var i = 0; i < notas.length; i++) {
    if (notas[i] % 2 !== 0) {
        console.log("Las notas impares son: " + notas[i]);
    }
}
// Numeros PRIMOS -- REVISAR
/*
const numerosPrimos = [7, 11, 15, 25, 63,13, 17];
for (let i = 2; i < numerosPrimos.length; i++ ){
    if (numerosPrimos % i === 0 ){
        console.log("Los numeros primos son: "+numerosPrimos[i])
    }
}*/
// mejorar para que solo se vea la fruta buscada - REVISAR
/*for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === frutaBuscada) console.log('Esta la fruta buscada: ' + frutaBuscada);
  
}*/
// console.log('**************************************************');
// if (frutas.includes(frutaBuscada)) {
//   console.log('Fruta esta');
// } else {
//   console.log('fruta no ta');
// }
/*
1. Crear array de comidas favoritas
2. Mostrar primera y última
3. Agregar al
3. Agregar al principio
4. Eliminar la segunda
*/
// Ejercicios
var comidasFavoritas = ['Ravioles', 'Asado', 'Hamburguesas', 'Pizza', 'Sushi'];
function mostrarArray(comidasFavoritas) {
    console.log("---------------");
    console.log("El array tiene los elementos: " + comidasFavoritas);
    console.log("---------------");
}
// Mostrar Primera comida
function mostrarPrimeraComida(comidasFavoritas) {
    console.log("La comida favorita es: " + comidasFavoritas[2]);
    console.log("---------------");
}
// Mostrar Ultima comida
function mostrarUltimaComida(comidasFavoritas) {
    var ultimaComida = comidasFavoritas[comidasFavoritas.length - 1];
    console.log("La última comida favorita es: " + ultimaComida);
    console.log("---------------");
}
// Agregar una comida al inicio
function agregarComidaInicio(comidasFavoritas) {
    var comidaNuevaInicio = comidasFavoritas;
    comidaNuevaInicio.unshift("Empanadas");
    console.log("Agregamos al inicio: " + comidaNuevaInicio[0]);
    console.log("El array tiene los elementos: " + comidasFavoritas);
    console.log("---------------");
}
// Agregar una comida al inicio
function agregarComidaFinal(comidasFavoritas) {
    var comidaNuevaFinal = comidasFavoritas;
    comidaNuevaFinal.push("Tacos Mexicanos");
    console.log("Agregamos al final: " + comidaNuevaFinal[comidasFavoritas.length - 1]);
    console.log("El array tiene los elementos: " + comidasFavoritas);
    console.log("---------------");
}
// Borramos la primera comida
function eliminarComidaInicio(comidasFavoritas) {
    var menosComidaInicio = comidasFavoritas;
    menosComidaInicio.shift();
    console.log("Eliminamos la primera comida y queda con: " + menosComidaInicio);
    console.log("---------------");
}
// Borramos la ultima comida
function eliminarComidaFinal(comidasFavoritas) {
    var menosComidaFinal = comidasFavoritas;
    menosComidaFinal.pop();
    console.log("Eliminamos la ultima comida y queda con: " + menosComidaFinal);
    console.log("---------------");
}
// Borramos la comida de la segunda "ubicación"
function eliminarComidaEspecifica(comidasFavoritas) {
    var comidaEspecifica = comidasFavoritas;
    console.log("Eliminamos la segunda opción: " + comidaEspecifica[1]);
    comidaEspecifica.splice(1, 1);
    console.log("El array queda con los elementos: " + comidaEspecifica);
    console.log("---------------");
}
mostrarArray(comidasFavoritas);
mostrarPrimeraComida(comidasFavoritas);
mostrarUltimaComida(comidasFavoritas);
agregarComidaInicio(comidasFavoritas);
agregarComidaFinal(comidasFavoritas);
eliminarComidaInicio(comidasFavoritas);
eliminarComidaFinal(comidasFavoritas);
eliminarComidaEspecifica(comidasFavoritas);
