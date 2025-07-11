// Precondiciones: 1-email valido / 2-estar activo / 3-rol tiene que ser admin
var user = {
    email: "gaby@gmail.com",
    isActive: true,
    role: "admin"
};
function validarUser(user) {
    if (!user.email) {
        return console.log('formato invalido');
    }
    if (!user.isActive) {
        return console.log('no es un usuario Activo');
    }
    if (!user.role) {
        return console.log('el role no es Admin');
    }
    return console.log('El usuario puede ingresar al sistema');
}
validarUser({
    email: "gaby@gmail.com",
    isActive: false,
    role: "admin"
});
