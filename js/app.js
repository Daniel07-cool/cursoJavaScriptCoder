let opcion;
let opcionProducto;
let carrito;
let finCompras;

// Agrega al carrito el precio total a pagar por el "prod" según la cantidad que se va a comprar
function calculoProductos(prod, precio, total) {
    let cant = parseInt(prompt("¿Cuál es la cantidad del producto " + prod + " que desea comprar? Ingrese en números"));
    return total + (precio * cant);
}

alert("Bienvenido a Veterinaria Rayito de Luna. A continuación te presentaremos nuestro menú de opciones");

do {
    opcion = prompt("Por favor, elija el número correspondiente a la acción que desea realizar: \n 1. Tienda \n 2. Salir");
    if (opcion == 1) {
        carrito = 0;
        finCompras = false;
        do {
            opcionProducto = parseInt(prompt("Por favor, seleccione el número del producto que desea comprar: \n 1. Ración Pedigree Adultos $329 \n 2. Transportador para felino $1209 \n 3. Cama pet afelpada $699 \n 4. Piedra aglomerantes $580 \n 5. Fin de la compra"));
            switch (opcionProducto) {
                case 1:
                    carrito = calculoProductos("Ración Pedigree Adultos", 329, carrito);
                    break;
                case 2:
                    carrito = calculoProductos("Transportador para felino", 1209, carrito);
                    break;
                case 3:
                    carrito = calculoProductos("Cama pet afelpada", 699, carrito);
                    break;
                case 4:
                    carrito = calculoProductos("Piedra aglomerantes", 580, carrito);
                    break;
                case 5:
                    finCompras = true;
            }
        } while (finCompras == false);
        alert("El valor total de su compra es: $" + carrito);
        opcion = prompt("Desea volver al menu principal? si/no")
    }
} while (opcion == "si" || opcion == 1);

alert("Gracias por contactarte con nosotros. ¡Te esperamos pronto!");