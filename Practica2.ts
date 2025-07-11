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
        
    }
    switch (nombreHuesped) {
        case "Maria":
            console.log("El cliente es incorrecto");
            break;
        
        case "Sergio":  
            console.log("El cliente es correcto");
            break;

        default:
            console.log("Cliente no encontrado");
}
}

function validarCantidadNoches(reservacionActual: Reservacion): void {
    switch (true) {
        case (reservacionActual.cantidadNoches >= 3):
    console.log("La Reserva se efectua con éxito");
    break;

  case (reservacionActual.cantidadNoches < 3):
    console.log("La cantidad minima de noches son 3");
    break;

  default:
    console.log("Debe colocar una cantidad de noches válida");
        
    }
}


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
  cantidadNoches: 2,
  pagoRealizado: false
};

validarCantidadNoches(reserva2); 

