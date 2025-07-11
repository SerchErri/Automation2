// Precondiciones: 1-email valido / 2-estar activo / 3-rol tiene que ser admin

/* preguntas: 
    el email es valido? si / no
    el usuario esta activo? si / no
    el rol es admin? si / no
*/

// const mail = true;
// const activo = true;
// const admin = true;

// if (!mail) {
//   if (!activo) {
//     if (!admin) {
//       console.log('Usuario tiene acceso al sistema');
//     } else {
//       console.log('El usuario no es Admin');
//     }
//   } else {
//     console.log('El usuario no esta activo');
//   }
// } else {
//   console.log
// }

type User = {
  email: string;
  isActive: boolean;
  role: string;
}

const user: User={
  email: "gaby@gmail.com",
  isActive: true,
  role: "admin"
}


function validarUser(user:{email:string,isActive:boolean,role:string}):void {
    if (!user.email){
        return console.log('formato invalido')
    }
    if (!user.isActive){
        return console.log('no es un usuario Activo')
       
    }
    if (!user.role){
        return console.log('el role no es Admin')
    }

    return console.log('El usuario puede ingresar al sistema')
}


validarUser({
  email: "gaby@gmail.com",
  isActive: false, // true
  role: "admin"
})



