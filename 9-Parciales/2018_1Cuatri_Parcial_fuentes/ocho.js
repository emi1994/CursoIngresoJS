function mostrar()
{
    var letra;
    var numero;
    var pares;
    var respuesta='si';
    var impares;
    var contadorCeros;
    var positivos;
    var contador;
    var promedios;
    var negativos;
    var maximo;
    var letramax;
    var num_max;
    maximo=0;
    negativos=0;
    contador=0;
    positivos=0;
    contadorCeros=0;
    impares=0;
    pares=0;
    
    while (respuesta=='si')
    {
        letra=prompt('Ingrese una letra');
        numero=prompt('Ingrese un numero');
        numero=parseInt(numero);
            while (numero<-100 || numero>100) 
            {
                numero=prompt('Ingrese un numero valido'); 
            }
            if(numero%2==0)
            {
                pares++;
            }else
            {
                impares++;
            }
            if (numero>0)
            {
                positivos=positivos+numero;
            }else
            {
                negativos=negativos+numero;
            }  
            if (numero>maximo) 
            {
                maximo=numero;
                letramax=letra;
            }

            if(numero == 0)
            {
                contadorCeros++;
            }
        respuesta=prompt('desea seguir ingresando datos?');
        contador++;
        promedios=positivos/contador;
            console.log("Pares: "+pares);
            console.log("Impares: "+impares);
            console.log("Ceros: "+contadorCeros);
            console.log("Promedios: "+promedios);
            console.log("Suma de Negativos: "+negativos);
            console.log("Letra y numero maximo:"+letramax+''+maximo);
    }
}






/* Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 


a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 


d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.


Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7) */


/* var letra;
    var numero;
    var pares;
    var respuesta='si';
    var impares;
    var ceros;
    var positivos;
    var contador;
    var promedios;
    var negativos;
    var maximo;
    var letramax;
    var num_max;
    maximo=0;
    negativos=0;
    contador=0;
    positivos=0;
    ceros=0;
    impares=0;
    pares=0;
    
    while (respuesta=='si')
    {
        letra=prompt('Ingrese una letra');
        numero=prompt('Ingrese un numero');
        numero=parseInt(numero);
            while (numero<-100 || numero>100) 
            {
                numero=prompt('Ingrese un numero valido'); 
            }
            if(numero%2==0)
            {
                pares++;
            }else
            {
                impares++;
            }
            if (numero>0)
            {
                positivos=positivos+numero;
            }else
            {
                negativos=negativos+numero;
            }  
            if (numero>maximo) 
            {
                maximo=numero;
                letramax=letra;
            }

            if(numero==-100 || numero==100){
                ceros=ceros+2;
            }
            else
            {
                if(numero%10==0)
                    ceros++;
            }
        respuesta=prompt('desea seguir ingresando datos?');
        contador++;
        promedios=positivos/contador;
            console.log("Pares: "+pares);
            console.log("Impares: "+impares);
            console.log("Ceros: "+ceros);
            console.log("Promedios: "+promedios);
            console.log("Suma de Negativos: "+negativos);
            console.log("Letra y numero maximo:"+letramax+''+maximo);
    }
   */

 