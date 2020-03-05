function mostrar()
{
    var primerNumero;
    var segundoNumero;
    var sumaTotal;

    //pedimos datos y definimos que son numeros enteros
    primerNumero = prompt("Ingrese el primer numero");
    primerNumero = parseInt(primerNumero);

    segundoNumero = prompt("Ingrese el segundo numero");
    segundoNumero = parseInt(segundoNumero);
    
    sumaTotal = primerNumero + segundoNumero;
    sumaTotal = parseInt(sumaTotal);

    //agregamos la logica y mostramos los resultados por alert
    if(primerNumero == segundoNumero)
    {
        alert(primerNumero + " " + segundoNumero);
    }else
    {
        if(primerNumero > segundoNumero)
        {
            alert(primerNumero - segundoNumero);
        }else
        {
            alert(primerNumero + segundoNumero);
        }    
        if(sumaTotal > 10)
        {
            alert("La suma es de " + sumaTotal + " y supero el 10");
        } 
    }


}



/* Bienvenidos (IF). 
Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 


Si el primero es mayor, los resto, 
de lo contrario los sumo. 

Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10". */