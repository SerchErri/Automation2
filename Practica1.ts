
/*
✅ 1. Validar un Producto en Stock
Enunciado:
Crear una función que reciba un objeto Producto con las propiedades nombre, precio y stock.
La función debe verificar:
Si el nombre está vacío, mostrar "Nombre inválido".
Si el precio es menor o igual a 0, mostrar "Precio inválido".
Si el stock es 0, mostrar "Producto sin stock disponible".
Si pasa todas las validaciones, mostrar "Producto disponible para la venta".

type Producto = {
    nombre: string;
    precio: number;
    stock: boolean;
}

const producto: Producto ={
    nombre: "Porotos",
    precio:0,
    stock:false
}

function validarProducto(producto:{nombre:string,precio:number,stock:boolean}):void{
    if (producto.nombre) {
        console.log("El nombre del producto es válido");
    }else if (!producto.nombre) {
        console.log("El nombre del producto es inválido");
    }


    if (producto.precio <= 0) {
        console.log("El precio del producto es inválido")
        
    }else if (producto.precio >= 1) { 
        console.log("El precio del producto es válido")
    }

    if (!producto.stock){
        console.log("El producto no tiene stock disponible")
    }else if (producto.stock) { 
        console.log("El producto tiene stock disponible")
    }
    console.log("---------------------------------------------------")
}

// Validar el nombre correcto
validarProducto({
    nombre:"Atún", 
    precio: 1, 
    stock: true 
})

// Validar el nombre incorrecto
validarProducto({
    nombre:"", 
    precio: 1, 
    stock: true 
})

//------------------------------

// Validar el precio incorrecto
validarProducto({
    nombre:"Atún", 
    precio: -1, 
    stock: true 
})

//------------------------------

// Validar el stock incorrecto
validarProducto({
    nombre:"Atún", 
    precio: 1, 
    stock: false 
})

//------------------------------





/*
✅ 2. Mostrar información de un Libro
Enunciado:
Crear una función que reciba un objeto Libro con titulo, autor y publicado (booleano).
La función debe mostrar mensajes según:
Si falta el título, mostrar "Falta el título del libro".
Si no tiene autor, mostrar "Falta el autor del libro".
Si publicado es false, mostrar "El libro aún no fue publicado".
Si todo está correcto, mostrar "El libro está disponible".

type Libro = {
    titulo: string;
    autor: string;
    publicado: boolean;
}
const libro: Libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    publicado: true
}   

function mostrarInformacionLibro(libro: {titulo: string, autor: string, publicado: boolean}): void {
    if (!libro.titulo) {
        console.log("Falta el título del libro");
    } else {
        console.log(`Título: ${libro.titulo}`);
    }

    if (!libro.autor) {
        console.log("Falta el autor del libro");
    } else {
        console.log(`Autor: ${libro.autor}`);
    }

    if (!libro.publicado) {
        console.log("El libro aún no fue publicado");
    } else {
        console.log("El libro está disponible");
    }
    console.log("---------------------------------------------------")
};
// Validar el libro con todos los datos correctos
mostrarInformacionLibro({           
    titulo: "El Principito", 
    autor: "Antoine de Saint-Exupéry", 
    publicado: true 
}); 
// Validar el libro con título faltante
mostrarInformacionLibro({           
    titulo: "", 
    autor: "Antoine de Saint-Exupéry", 
    publicado: true 
}); 
// Validar el libro con autor faltante
mostrarInformacionLibro({           
    titulo: "El Principito", 
    autor: "", 
    publicado: true 
}); 
// Validar el libro con publicado como false

mostrarInformacionLibro({           
    titulo: "El Principito", 
    autor: "Antoine de Saint-Exupéry", 
    publicado: false 
});


/*
✅ 3. Validar una Reserva de Hotel
Enunciado:
Crear una función que reciba un objeto Reserva con nombreCliente, cantidadNoches
 y pagoRealizado (booleano).
La función debe:
Si no hay nombre del cliente, mostrar "Debe ingresar un nombre válido".
Si la cantidad de noches es 0 o menos, mostrar "La cantidad de noches debe ser mayor a 0".
Si el pago no fue realizado, mostrar "El pago no fue efectuado".
Si todo está bien, mostrar "Reserva confirmada". */

type Reserva = {
    nombreCliente: string | undefined;
    cantidadNoches: number;
    pagoRealizado: boolean;
}
const reserva: Reserva = {
    nombreCliente: "Sergio",
    cantidadNoches: 7,
    pagoRealizado: true
};

// funciones que evaluen cada propiedad 
// 1-funcion que evalue el nombre del cliente (con metodos de ser posible)
// 2-funcion que evalue la catidad de noches (con metodos de ser posible)
// 3-funcion que evalue el pago realizado (con metodos de ser posible)

function reservaHotel(nombreCliente: string, cantidadNoches: number, pagoRealizado: boolean): void {
    if (!reserva.nombreCliente){
    console.log("Debe ingresar un nombre válido")
}else {
    console.log(`Nombre del cliente: ${reserva.nombreCliente}`)
}
    if (!reserva.cantidadNoches || reserva.cantidadNoches <= 1){
    console.log("La cantidad de noches debe ser mayor a 0")
}else {
    console.log(`Cantidad de noches: ${reserva.cantidadNoches}`)
}
    if (!reserva.pagoRealizado){
    console.log("El pago no fue efectuado")
}else {
    console.log("La reserva esta pagada")   
}
    
    console.log("---------------------------------------------------")  
};

// Validar la reserva con todos los datos correctos 
reservaHotel({
    nombreCliente: "Sergio",
  	cantidadNoches: 7,
  	pagoRealizado: true
});

// Validar la reserva con nombre de cliente faltante    
reservaHotel({
    nombreCliente: "",
  	cantidadNoches: 7,
  	pagoRealizado: true
});


// Validar la reserva con cantidad de noches 0  
reservaHotel({
    nombreCliente: "Sergio",
  	cantidadNoches: 0,
  	pagoRealizado: true
});

// Validar la reserva con pago no realizado
reservaHotel({
	nombreCliente: "Sergio",
  	cantidadNoches: 7,
  	pagoRealizado: false
});



