function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño) {
    case "Febrero":
        alert("Tiene 28 días.");
        break;
    case "Enero":
        alert("Tiene 31 días.");      
    case "Marzo":
        alert("Tiene 31 días.");
        break;
    case "Julio":
        alert("Tiene 31 días.");    
    case "Agosto":
        alert("Tiene 31 días.");    
    case "Diciembre":
        alert("Tiene 31 días.");
        break; 

    default:
        alert("Tiene 30 días.")
        break;
}
//alert (mesDelAño);
	


}//FIN DE LA FUNCIÓN