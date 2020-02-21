function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;

	while(contador < 5){

		contador = contador + 1;
		numeroIngresado = prompt("Ingrese su numero");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)){
			numeroIngresado = prompt("Error: No ingreso un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		acumulador = acumulador + numeroIngresado;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN



