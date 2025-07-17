function validarCliente(nombre: string, edad: number, tickets: number): boolean {
    const nombreCliente = "Sergio";
    const edadCliente = 44;
    const ticketsCliente = 2;

    if (nombre === nombreCliente && edad === edadCliente && tickets === ticketsCliente) {
        console.log(" El cliente es válido");
        return true;
    } else {
        console.log(" El cliente inválido");
        return false;
    }
}

function mostrarPeliculas(edad: number): void {
    if (edad >= 18) {
        console.log(" Películas disponibles para adultos:");
        console.log("1. Superman");
        console.log("2. Harry Potter");
        console.log("3. Lilo y Stich");
        console.log("4. Rápido y Furioso");
        console.log("5. Fórmula 1");
    } else {
        console.log(" Películas disponibles para menores:");
        console.log("1. Lilo y Stich");
        console.log("2. Entrenando a tu Dragón");
        console.log("3. Buscando a Nemo");
        console.log("4. Blancanieves");
    }
}

function elegirPelicula(opcion: number): void {
    switch (opcion) {
        case 1:
            console.log("Ud ha elegido Superman");
            break;
        case 2:
            console.log("Ud ha elegido Harry Potter");
            break;
        case 3:
            console.log("Ud ha elegido Lilo y Stich");
            break;
        case 4:
            console.log("Ud ha elegido Rápido y Furioso");
            break;
        case 5:
            console.log("Ud ha elegido Fórmula 1");
            break;
        default:
            console.log("No ha elegido ninguna película válida");
    }
}

function calcularPrecio(edad: number, cantidadTickets: number): number {
    const precio = edad >= 18 ? 100 : 50;
    return precio * cantidadTickets;
}

// Simulación de flujo
const nombre = "Sergio";
const edad = 12;
const tickets = 4;

if (validarCliente(nombre, edad, tickets)) {
    mostrarPeliculas(edad);
    elegirPelicula(3);
    const total = calcularPrecio(edad, tickets);
    console.log(`Total a pagar: $${total}`);
    console.log("----------------------------")
}

