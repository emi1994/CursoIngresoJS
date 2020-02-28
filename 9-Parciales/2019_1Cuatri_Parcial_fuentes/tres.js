function mostrar()
{
    var precio;
    var porcentajeDescuento;
    var precioFinal;

    precio = prompt("Ingrese el precio del producto");
    precio = parseInt(precio);

    porcentajeDescuento = prompt("Ingrese el descuento");
    porcentajeDescuento = parseInt(porcentajeDescuento);

    precioFinal = precio * porcentajeDescuento / 100;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
