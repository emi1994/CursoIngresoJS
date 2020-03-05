function mostrar()
{
 var nombreCliente;
 var edadCliente;
 var sexoCliente;
 var transaccion;
 var importe;
 var respuesta = "si";
 var contador;
 var contadorMujeres;
 var contadorHombres;
 var edadMinima;
 var edadMaxima;
 var sexoMaxima;
 var nombreMinima;
 var operacionMasUsada;
 var acumulador;

 contador = 0;
 acumulador = 0;
 contadorHombres = 0;
 contadorMujeres = 0;
 contadorDeposito = 0;
 contadorExtraccion = 0;
 edadMinima = 0;
 sexoMaxima= 0;

    while(respuesta == "si")
    {
        nombreCliente = prompt("Ingrese el nombre del cliente");
        while(!isNaN(nombreCliente))
        {
            nombreCliente = prompt("Ingrese un nombre valido");
        }

        edadCliente = prompt("Ingrese la edad del cliente (mayor a 18)");
        edadCliente = parseInt(edadCliente);

        while(isNaN(edadCliente) || edadCliente < 18)
        {
            edadCliente = prompt("Ingerese una edad valida");
            edadCliente = parseInt(edadCliente);
        }

        sexoCliente = prompt("Ingrese el sexo del cliente f/m");
        while(!isNaN(sexoCliente) || sexoCliente !="f" && sexoCliente !="m")
        {
            sexoCliente = prompt("Ingrese un sexo valido");
        }

        transaccion = prompt("Ingrese la transaccion: extraccion/deposito");
        while(!isNaN(transaccion) || transaccion !="extraccion" && transaccion !="deposito")
        {
            transaccion = prompt("Ingrese una transaccion valida");
            if(transaccion == "extraccion")
            {
                contadorExtraccion++;
            }else
                {
                    contadorDeposito++;
                }
        }

        importe = prompt("Ingrese el importe del cliente");
        importe = parseInt(importe);

        while(isNaN(importe) || importe < 0)
        {
            importe = prompt("Ingrese un importe valido");
            importe  = parseInt(importe);
        }

        if(contador == 0 || edadCliente < edadMinima)
        {
            edadMinima = edadCliente;
            nombreMinima = nombreCliente;
        }

        if(contador == 0 || edadCliente > edadMaxima)
        {
            edadMaxima = edadCliente;
            sexoMaxima = sexoCliente;
        }

        if(sexoCliente == "m")
        {
            contadorHombres++;
        }else
            {
                contadorMujeres ++;
            }
        
        if(contadorDeposito > contadorExtraccion)
        {
            operacionMasUsada = "La operacion mas usada fue deposito";
        }else
            {
                operacionMasUsada=  "La operacion mas usada fue extraccion";
            }

        contador ++;
        acumulador = acumulador + edadCliente;
        promedio = acumulador / contador;
        respuesta = prompt("Desea continuar? si/no");
    }
}



/* necesito saber:
el nombre del cliente
la edad del cliente(debe ser mayor de edad)
sexo
tipo de transaccion(extraccion o deposito)
importe (validar que no sea negativo)

jose 37 m extraccion 1000
maria 40 f deposito 2000
jesus 33 m extraccion 1500
melchor 20 m  extraccion 1300 

promedio de edad
nombre del mas joven

cantidad de hombres=3
cantidad de mujeres=1

sexo del importe mas alto=f
operacion mas utilizada=ext
importe del mas viejo=2000 */