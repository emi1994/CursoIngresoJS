function mostrar()
{
//tomo la edad  

	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if(edad > 17) // Tiene dos valores (verdadero o falso) 
	{
		alert("Es mayor");
	}

}//FIN DE LA FUNCIÓN