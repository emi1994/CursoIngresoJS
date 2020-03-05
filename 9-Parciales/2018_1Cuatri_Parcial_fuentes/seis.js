function mostrar()
{
	//tomo la hora
var laHora = document.getElementById('laHora').value;
//defino que es un numero entero
laHora = parseInt(laHora); 

//creo los distintos casos para el dato ingresado
    switch (laHora)
    {	
    	case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        alert("Es de mañana.");
        break;

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        alert("Es de tarde");
        break;

        //creamos la logica dentro de los casos y mostramos mensaje
        default:
        if(laHora > 20 && laHora < 25){
            alert("Es de noche");
            alert("A mimir");
        }else
        {
            // validamos
            alert("La hora no es valida");
        }
        break;

    }

}

/*Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".*/