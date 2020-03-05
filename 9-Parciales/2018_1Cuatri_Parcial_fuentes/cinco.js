function mostrar()


{
	var sistemaSolar;
	//pedimos el dato
	sistemaSolar = prompt("Ingrese un planeta del sistema solar");

	//validamos
	while(sistemaSolar != "tierra" && sistemaSolar != "mercurio" && sistemaSolar != "venus" && sistemaSolar != "marte" && sistemaSolar != "jupiter" && sistemaSolar != "saturno" && sistemaSolar != "urano" && sistemaSolar != "neptuno" && sistemaSolar != "pluton")
	{
		sistemaSolar = prompt("Ingrese un planeta del sistema solar valido");
	}
	//generamos los distintos mensajes basados en el dato ingresado
	switch (sistemaSolar) {
		case "tierra":
			alert("Acá vivimos nosotros");
			break;
	
		case "mercurio":
		case "venus":
			alert("Acá hace mas calor");
			break;
		
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
			alert("Acá hace mas frío");
			break;
	}
}





/* Bienvenidos (SWITCH). 
pedir el ingreso de un planeta del sistema solar 

Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "acá hace más calor". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 

 Mercurio, Venus, la Tierra, Marte, Júpiter, Saturno, Urano, Neptuno y Plutón.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra). */


/* var sistemaSolar;
sistemaSolar = prompt("Ingrese un sistema solar");
while(sistemaSolar != "mercurio" && sistemaSolar != "venus" && sistemaSolar != "tierra" && sistemaSolar != "marte" && sistemaSolar != "jupiter" && sistemaSolar != "saturno" && sistemaSolar != "urano" && sistemaSolar != "neptuno")
{
	sistemaSolar = prompt("Ingrese un sistema solar valido");
}
switch(sistemaSolar){
	case "tierra":
	alert("Aca es donde vivimos");
	break;

	case "mercurio":;
	case "venus":;
	case "marte":;
	alert("Aca hace mas calor");
	break;
	
	case "jupiter":;
	case "saturno":;
	case "urano":;
	case "neptuno":;
	alert("Aca hace mas frio");
	break;
 } */
