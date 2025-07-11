// funciones que evaluen cada propiedad 
// 1-funcion que evalue el nombre del cliente (con metodos de ser posible)
// 2-funcion que evalue la catidad de noches (con metodos de ser posible)
// 3-funcion que evalue el pago realizado (con metodos de ser posible)

type Reservacion = {
    nombreHuesped: string | undefined;
    cantidadNoches: number;
    pagoRealizado: boolean;
}       


const reservacionActual : Reservacion = {
    nombreHuesped: "Sergio",        
    cantidadNoches: 5,
    pagoRealizado: true
};

function validarHuesped (nombreHuesped: string): void{
    if (!nombreHuesped) {
        console.log("Debe ingresar un nombre válido");
        console.log("----------------------"); 
        
    }
    switch (nombreHuesped) {
        case "Maria":
            console.log("El cliente es incorrecto");
            console.log("----------------------");
            break;
        
        case "Sergio":  
            console.log("El cliente es correcto");
            console.log("----------------------");
            break;

        default:
            console.log("Cliente no encontrado");
            console.log("----------------------");
}
}

function validarCantidadNoches(reservacionActual: Reservacion): void {
    switch (true) {
        case (reservacionActual.cantidadNoches >= 3):
    console.log("La Reserva se efectua con éxito");
    console.log("----------------------");
    break;

  case (reservacionActual.cantidadNoches > 1 && reservacionActual.cantidadNoches < 3):
    console.log("La cantidad minima de noches son 3");
    console.log("----------------------");
    break;

  default:
    console.log("Debe colocar una cantidad de noches válida");
    console.log("----------------------");
        
    }
}

function validarPagoRealizado(reservacionActual: Reservacion): void {
    switch (reservacionActual.pagoRealizado) {
        case true:
            console.log("El pago se ha realizado correctamente");
            console.log("----------------------");
            break;

        case false:
            console.log("El pago no se ha realizado");
            console.log("----------------------");
            break;

        default:
            console.log("Debe colocar un estado de pago válido");
            console.log("----------------------");
    }
}

// ----------- Llamamadas a las funciones de validación -----------


validarHuesped("Sergio");
validarHuesped("Maria");

const reserva1: Reservacion = {
  nombreHuesped: "Sergio",
  cantidadNoches: 5,
  pagoRealizado: true
};

validarCantidadNoches(reserva1); 

// Ejemplo 2: menor a 3
const reserva2: Reservacion = {
  nombreHuesped: "Lucía",
  cantidadNoches: 0,
  pagoRealizado: false
};

validarCantidadNoches(reserva2); 

validarPagoRealizado(reserva1);
validarPagoRealizado(reserva2);

