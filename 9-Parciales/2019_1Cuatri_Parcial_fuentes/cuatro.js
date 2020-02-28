function mostrar()
{
    var numeroUno;
    var numeroDos;
    var numeroFinal;
    var numeroResta;

    numeroUno = prompt("Ingrese el primer numero");
    numeroUno = parseInt(numeroUno);
    numeroDos = prompt("Ingrese el segundo numero");
    numeroDos = parseInt(numeroDos);

    if(numeroUno == numeroDos )
    {   
        alert(numeroUno +""+ numeroDos);
    }else{
        if(numeroUno > numeroDos){
            numeroResta = numeroUno - numeroDos;
            alert(numeroResta);
        }else{
            numeroFinal = numeroUno + numeroDos;
        }if(numeroResta > 10){
            alert("La resta es " + numeroResta + " y supero el 10");
        }
    }
    
}


// Si son iguales los muestro concatenados. 
// Si el primero es mayor, los resto, 
// de lo contrario los sumo. 
// Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
// "la resta es xxx y superó el 10".

/* if(numeroUno > numeroDos){
    numeroResta = numeroUno - numeroDos;
    alert(numeroResta);
}
if(numeroUno < numeroDos){
    numeroFinal = numeroUno + numeroDos;
}
if(numeroResta > 10){
     alert("La resta es " + numeroResta + " y supero el 10");
}
 */
