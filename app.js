let opcion;
let opcionProducto;
let producto;
let carrito;
let cant;
let finCompras = false;

alert("Bienvenido a Veterinaria Rayito de Luna. A continuación te presentaremos nuestro menú de opciones");

do {
    opcion = prompt("Por favor, elija la opción que desea realizar: " + 
        "1. Tienda " +
        "2. Salir");
    if (opcion == "1") {
        carrito = 0;
        do {
            opcionProducto = prompt("Por favor, seleccione el número del producto que desea comprar: " +
                "1. Ración Pedigree Adultos $329 " +
                "2. Transportador para felino $1209 " +
                "3. Cama pet afelpada $699 " +
                "4. Piedra aglomerantes $580 " +
                "5. Fin de la compra");
            switch (opcionProducto) {
                case "1":
                    producto = "Ración Pedigree Adultos";
                    cant = parseInt(prompt("¿Cuál es la cantidad del producto " + producto + " que desea comprar? Ingrese en números"));
                    carrito = carrito + (329 * cant);
                    break;
                case "2":
                    producto = "Transportador para felino";
                    cant = parseInt(prompt("¿Cuál es la cantidad del producto " + producto + " que desea comprar? Ingrese en números"));
                    carrito = carrito + (1209 * cant);
                    break;
                case "3":
                    producto = "Cama pet afelpada";
                    cant = parseInt(prompt("¿Cuál es la cantidad del producto " + producto + " que desea comprar? Ingrese en números"));
                    carrito = carrito + (699 * cant);
                    break;
                case "4":
                    producto = "Piedra aglomerantes";
                    cant = parseInt(prompt("¿Cuál es la cantidad del producto " + producto + " que desea comprar? Ingrese en números"));
                    carrito = carrito + (580 * cant);
                    break;
                case "5":
                    finCompras = true;
            }
        } while (finCompras == false);
        alert ("El valor total de su compra es: $" + carrito);
        opcion = prompt("Desea volver al menu principal? si/no")
    }
} while (opcion == "si" || opcion == 1);

alert ("Gracias por contactarte con nosotros. ¡Te esperamos pronto!");