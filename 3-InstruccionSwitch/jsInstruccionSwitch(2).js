function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    //calendario completo

/*     case "Abril":
        alert("Falta para el invierno.");
        break;    
    case "Mayo":
    alert("Falta para el invierno.");
    break;


    // comienzo invierno
    case "Junio":
        alert("Falta para el invierno.");
        break; */
    case "Julio":
        alert("Abrigate que hace frio!");
        break;
     case "Agosto":
        alert("Abrigate que hace frio!");
        break;
    case "Septiembre":
        alert("Ya pasamos el frio, ahora hace calor!");
        break;
    // fin invierno
    

    case "Octubre":
        alert("Ya pasamos el frio, ahora hace calor!");
        break;
    case "Noviembre":
        alert("Ya pasamos el frio, ahora hace calor!");
        break;   
    //comienzo de verano
    case "Diciembre":
         alert("Ya pasamos el frio, ahora hace calor!");
         break;
    case "Enero":
        alert("Ya pasamos el frio, ahora hace calor!");
        break;
    case "Febrero":
        alert("Ya pasamos el frio, ahora hace calor!");
        break;
    case "Marzo":
        alert("Ya pasamos el frio, ahora hace calor");
        break;

    default:
        alert("Falta para el invierno.")
}




}//FIN DE LA FUNCIÓN