

function validarCLiente(nombre:string,edad:number,tickets: number): boolean{
    const nombreCliente = "Sergio"
    const edadCliente = 44
    const ticketsCliente = 2
    if( nombre === nombreCliente && edad === edadCliente && tickets === ticketsCliente){
        console.log("El cliente es valido")
    }else(){
        console.log("El cliente inválido")
    }
    return true;
}

function mostrarPeliculas (): void{
    console.log("1. Superman")
    console.log("2. Harry Potter")
    console.log("3. Lilo y Stich")
    console.log("4. Rápido y Furioso")
    console.log("5. Formula 1")
}

function elegirPelicula(opcion: number): void {
    switch (opcion){
        case 1: 
            console.log("Ud ha elegido Superman")
        break;
        case 2:
            console.log("Ud ha elegido Harry Potter")
        break;
        case 3:
            console.log("Ud ha elegido Lilo y Stich")
        break;
        case 4:
            console.log("Ud ha elegido Rápido y Furioso")
        break;
        case 5:
            console.log("Ud ha elegido Formula 1")
        break;
        default: 
        console.log("No ha elegido ninguna pelicula")
}
}

function pagoTickets(ticketsCliente:number): number{
    const precioTickets: number = 100
    const cantidadTickets =  ticketsCliente
    const totalTickets: number = precioTickets * cantidadTickets 
    return totalTickets
}

function opcionesPelicula(edadCliente:number): void{
    
    if(edadCliente){
        console.log("Ud puede ver estas peliculas para Mayores")
        console.log("1. Superman")
        console.log("2. Harry Potter")
        console.log("3. Lilo y Stich")
        console.log("4. Rápido y Furioso")
        console.log("5. Formula 1")
    }else{
        console.log("Peliculas para Menores")
        console.log("3. Lilo y Stich") 
    }
}

validarCLiente("Sergio",44,2);
validarCLiente("Luis",16,4);
mostrarPeliculas();

opcionesPelicula(18);
opcionesPelicula(35);
elegirPelicula(5);
pagoTickets(4);

