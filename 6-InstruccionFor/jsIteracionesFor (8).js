function mostrar()
{
	var numeroIngresado;
	var i;
	var flag;
	flag = 0;
    numeroIngresado = prompt("Ingrese el numero");
	
	for(i= 2; i < numeroIngresado; i++)
	{
		if(numeroIngresado%i==0)
		{
			flag = 1;
			break;
		}
	}

	if(flag != 1)
	{
		alert(" Es primo el " + numeroIngresado);
	}



	var contador;
	var edad;
	//edad = parseInt(edad);
	//edad = prompt("Ingrese la edad de la persona"); No es necesario en DO WHILE
	contador = 0;

	do{
	
	    edad = prompt("Ingrese la edad de la persona");
		edad = parseInt(edad);

	}while(edad < 0 || edad > 110);






}//FIN DE LA FUNCIÓN