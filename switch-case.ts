/* Segun el rol que tenga podra hacer cosas o no*/

function validarRol(role: string): void{

  switch (role){

    case "admin":
      console.log("El usuario es admin y puede hacer de todo")
      break;
    case "qa":
      console.log("El usuario es QA y solo puede ejecutar test")
       break;
    case "dev":
      console.log("El usuario es dev y puede deployar codigo fuente")
      break;
    case "pm":
      console.log("El usuario es un vago que vive de preguntar pavadas")
      break;
     
    default:
        console.log("Rol no encontrado")
  }

}

validarRol("tl")