function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	//Genero el número RANDOM entre 1 y 10 
	notaRandom = Math.floor(Math.random() * 10) + 1;
	console.log(notaRandom);

	// if(notaRandom > 8)
	// {
	// 	alert("Excelente");
	// }else

	// if (notaRandom < 9 && notaRandom > 3) 
	// {
	// 	alert("Aprobado");
	// }
	// if (notaRandom < 4) 
	// {
	// 	alert("Vamos, la proxima se puede");
	// }


	if(notaRandom > 8)
	{
		alert("Excelente");
	}else
	{
		if(notaRandom <  4)
		{
			alert("Desaprobado");
		}else
		{
			alert("Aprobado");
		}
	}
		



}//FIN DE LA FUNCIÓN