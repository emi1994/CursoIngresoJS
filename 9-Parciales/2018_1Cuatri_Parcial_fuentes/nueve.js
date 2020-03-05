function mostrar()
{
    var marca;
    var pesoProducto;
    var temperaturaAlmacenamiento;
    var temperaturaPares;
    var marcaMasPesado;
    var pesoMaximo;
    var productosEnCero;
    var contador;
    var contadorPares;
    var respuesta;
    var pesoPromedio;
    var pesoMinimo;
    contador = 0;
    contadorPares = 0;
    productosEnCero = 0;
    respuesta = "si";

    while(respuesta == "si")
    {
        marca = prompt("Ingrese el nombre de la marca del producto");
        while(!isNaN(marca))
        {
            marca = prompt("Ingrese una marca valida");
        }

        pesoProducto = prompt("Ingrese el peso del producto");
        pesoProducto = parseInt(pesoProducto);
        while(pesoProducto < 0 || pesoProducto >100)
        {
            pesoProducto = prompt("Ingrese un peso entre 1~100");
            pesoProducto = parseInt(pesoProducto);
        }

        temperaturaAlmacenamiento = prompt("Ingrese la temperatura de almacenamiento (entre -30 ~ 30 grados");
        temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);

        while(temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30)
        {
            temperaturaAlmacenamiento = prompt("Ingrese una temperatura valida");
            temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);
        }

        if(temperaturaAlmacenamiento%2==0)
        {
            contadorPares ++;
        }

        if(pesoProducto > pesoMaximo)
        {
            pesoMaximo = pesoProducto;
            marcaMasPesado = pesoMaximo;
        }

        if(pesoProducto < pesoMinimo)
        {
            pesoMinimo = pesoProducto;
        }

        if(temperaturaAlmacenamiento < 0)
        {
            productosEnCero ++;
        }
        contador ++;
        pesoPromedio = pesoProducto / contador;
        respuesta = prompt("Para continuar si/no");
    }

    console.log(temperaturaPares);
    console.log(marcaMasPesado);
    console.log(productosEnCero);
    console.log(pesoPromedio);
    console.log(pesoMaximo);
    console.log(pesoMinimo);
}






/* Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 


d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo. */