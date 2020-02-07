function mostrar()
{
	// var precio;
	// var descuento;
	// var precioFinal;

	// precio = prompt("Ingrese el precio");
	// precio = parseint(precio);

	// descuento = prompt("Ingrese el descuento");
	// descuento = 
 
	// precio = parseint(precio);
	// descuento = parseint(descuento);

 // 	console.log(precio);
 // 	console.log(descuento);

 	var precio;
 	var porcentaje;
 	var valorDelPorcentaje;
 	var precioFinal;

 	precio = prompt("Ingrese el precio");
 	precio = parseint(precio);

 	porcentaje = prompt("Ingrese el descuento");
 	porcentaje = parseint(porcentaje);

 	console.log(porcentaje);

 	valorDelPorcentaje = precio * porcentaje / 100;

 	precioFinal = precio - valorDelPorcentaje;
 	console.log(precioFinal);

}
