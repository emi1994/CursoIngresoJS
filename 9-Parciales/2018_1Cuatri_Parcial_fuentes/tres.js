function mostrar()
{
    var precio;
    var descuento;
    var descuentoTotal;
    var precioFinal;
 
    // obtenemos los datos
    precio = prompt("Ingrese el precio del producto");
    precio = parseInt(precio);

    descuento = prompt("Ingrese el descuento del producto");
    descuento = parseInt(descuento);

    // agregamos la logica
    descuentoTotal = (precio * descuento) / 100;
    precioFinal = precio - descuentoTotal;


    //mostramos resultado
    document.getElementById("elPrecioFinal").value = precioFinal;
}
