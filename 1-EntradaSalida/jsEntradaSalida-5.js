/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	var nombre;
	var edad;
	
	nombre = prompt("Cual es tu nombre?");
	edad = prompt("Cuantos años tienes?");
	
	document.getElementById('elNombre').value = nombre;
	document.getElementById('laEdad').value = edad;
	
	
	
}

