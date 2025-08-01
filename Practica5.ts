
//array

let frutas = ['manzana', 'pera', 'naranja', 'uva', 'Sandia'];

let frutaBuscada = 'naranja';

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
let notas: number[] = [10, 15, 25, 63, 12, 58];
for (let i = 0; i < notas.length; i++) {
    if (notas[i] % 2 === 0) {
        console.log("Las notas pares son: " + notas[i]);
    }
}
// Notas IMPARES
for (let i = 0; i < notas.length; i++) {
    if (notas[i] % 2 !== 0) {
        console.log("Las notas impares son: " + notas[i])
    }
}

// Numeros PRIMOS -- REVISAR
/*
const numerosPrimos = [7, 11, 15, 25, 63,13, 17];
for (let i = 2; i < numerosPrimos.length; i++ ){
    if (numerosPrimos % i === 0 ){
        console.log("Los numeros primos son: "+numerosPrimos[i])
    }
}
    function numerosPrimos(num: number): boolean{
     let num = [7, 11, 15, 25, 63,13, 17]

     if (num =< 1){
     return false}

     if (num )
    }

*/


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

let comidasFavoritas: String[] = ['Ravioles', 'Asado', 'Hamburguesas', 'Pizza', 'Sushi'];


function mostrarArray(comidasFavoritas: any): void {
    console.log("---------------");
    console.log("El array tiene los elementos: " + comidasFavoritas)
    console.log("---------------");
}

// Mostrar Primera comida - CORREGIR 
function mostrarPrimeraComida(comidasFavoritas: any): void {
    console.log("La comida favorita es: " + comidasFavoritas[2]);
    console.log("---------------");
}




// Mostrar Ultima comida
function mostrarUltimaComida(comidasFavoritas: any): void {
    let ultimaComida = comidasFavoritas[comidasFavoritas.length - 1];
    console.log("La última comida favorita es: " + ultimaComida);
    console.log("---------------");
}

// Agregar una comida al inicio
function agregarComidaInicio(comidasFavoritas: any): void {
    let comidaNuevaInicio = comidasFavoritas
    comidaNuevaInicio.unshift("Empanadas");
    console.log("Agregamos al inicio: " + comidaNuevaInicio[0])
    console.log("El array tiene los elementos: " + comidasFavoritas)
    console.log("---------------")

}

// Agregar una comida al inicio
function  agregarComidaFinal(comidasFavoritas: any): void {
    let comidaNuevaFinal = comidasFavoritas
    comidaNuevaFinal.push("Tacos Mexicanos");
    console.log("Agregamos al final: " + comidaNuevaFinal[comidasFavoritas.length - 1])
    console.log("El array tiene los elementos: " + comidasFavoritas);
    console.log("---------------")
}

// Borramos la primera comida
function eliminarComidaInicio(comidasFavoritas: any): void {
    let menosComidaInicio = comidasFavoritas
    menosComidaInicio.shift();
    console.log("Eliminamos la primera comida y queda con: " + menosComidaInicio);
    console.log("---------------");
}

// Borramos la ultima comida
function eliminarComidaFinal(comidasFavoritas: any): void {
    let menosComidaFinal = comidasFavoritas
    menosComidaFinal.pop();
    console.log("Eliminamos la ultima comida y queda con: " + menosComidaFinal);
    console.log("---------------");
}

// Borramos la comida de la segunda "ubicación"
function eliminarComidaEspecifica(comidasFavoritas: any): void {
    let comidaEspecifica = comidasFavoritas
    console.log("Eliminamos la segunda opción: " + comidaEspecifica[1]);
    comidaEspecifica.splice(1,1)
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

