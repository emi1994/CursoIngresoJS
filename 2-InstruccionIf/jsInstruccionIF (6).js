function mostrar()
{
//tomo la edad  

	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if(edad < 13)
	{
		alert("Es menor");
	}
	else
	{
		if(edad > 17)
		{
			alert("Es mayor");
		}
		else
		{
			alert("Es Adolescente");
		}


	}

/*	if()
	{

	}
	else
	{
		if()
		{

		}
		else
		{
			
		}





}//FIN DE LA FUNCIÓN