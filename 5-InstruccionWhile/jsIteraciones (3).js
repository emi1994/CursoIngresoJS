function mostrar()
{
	var clave = prompt("ingrese el número clave.");
	while(clave!= "utn750")
	{
		alert("Contraseña incorrecta");
		clave = prompt("ingrese el número clave.");
	}
	alert("Bienvenido");

}//FIN DE LA FUNCIÓN