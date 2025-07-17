type Login = {
    usuario: string;    
    contrasena: string;
}

const loginActual: Login = {
    usuario: "Sergio",
    contrasena: "123"
};

// == comparacion 1 es 1
// === compara 1 sea 1 y sea number 
// === compara que sergio sea sergio y sea string

function login(usuario: string, contrasena:string): boolean {
    const usuarioValido = "Sergio"
    const passValida = "123"
    return usuario === usuarioValido && contrasena === passValida
}

function mostrarMenu(): void {
    console.log("1- Cafe");
    console.log("2 - Café con Leche");
    console.log("3 - Café con Chocolate");
    console.log("4 - Te");
    console.log("5 - Café Expreso");
    console.log("----------------------");
    }

function seleccionaMenu(opcion: number): void {
    switch (opcion) {
        case 1:
            console.log("Has seleccionado Café");
            console.log("----------------------");
            break;
        case 2:
            console.log("Has seleccionado Café con Leche");
            console.log("----------------------");
            break;
        case 3:
            console.log("Has seleccionado Café con Chocolate");
            console.log("----------------------");
            break;
        case 4:
            console.log("Has seleccionado Té");
            console.log("----------------------");
            break;
        case 5:
            console.log("Has seleccionado Café Expreso");
            console.log("----------------------");
            break;
        default:
            console.log("Opción no válida, por favor intente de nuevo.");
            console.log("----------------------");
    }
}   

const usuario: string = "Sergio"
const contrasena: string = "123"
const opcion: number = 2;

if(login(usuario,contrasena)){   
    console.log("Usuario Logueado");
    mostrarMenu();
    seleccionaMenu(opcion);
}else {
    console.log("Usuario o contraseña incorrectos");
};






    

