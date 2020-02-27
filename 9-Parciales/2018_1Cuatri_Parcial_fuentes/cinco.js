function mostrar()

{
	var sistemaSolar;
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


     }
}


