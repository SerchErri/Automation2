var books = [
    { title: "Cien Años de Soledad", author: "Gabriel García Márquez", year: 1967 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "El Principito", author: "Antoine de Saint-Exupéry", year: 1943 },
    { title: "Rayuela", author: "Julio Cortázar", year: 1963 },
    { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 }
];
var libroDestino = { title: "Destino", author: "Agosto", year: 2025 };
function buscarLibro(titulo) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].title === titulo) {
            console.log("El " + titulo + "se encuentra en el listado");
            console.log("Está en sección " + i);
            return true;
        }
    }
    console.log("Debe agregar los datos del Libro");
    return false;
}
function insertarLibro(libroDestino, books) {
    books.push(libroDestino);
    console.log("El libro nuevo se llama " + libroDestino.title + " el autor es " + libroDestino.author + "publicado el " + libroDestino.year);
}
//buscarLibro("Destino");
//insertarLibro(libroDestino,books)
//buscarLibro("Destino");
console.log(books);
