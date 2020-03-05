function mostrar()
{
   var marca;
   var pesoProducto;
   var temperaturaAlmacenamiento;
   var respuesta;
   var contador;
   var contadorPares;
   var temperaturasPares;
   var contadorBajoCero;
   var productoMaximo;
   var marcaPesado;
   var productoMinimo;
   var promedio;

   productoMinimo =  0;
   productoMaximo = 0;
   respuesta = "si";
   contador = 0;
   contadorBajoCero = 0;
   contadorPares = 0;
   acumulador = 0;

   while(respuesta == "si")
   {
       marca = prompt("Ingrese la marca de su producto");
       while(!isNaN(marca))
       {
           marca = prompt("Ingrese solo letras");
       }
       pesoProducto = prompt("Ingrese el peso de su producto entre 1-100");
       pesoProducto = parseInt(pesoProducto);
       while(isNaN(pesoProducto) || pesoProducto < 1 || pesoProducto > 100)
       {
           pesoProducto = prompt("Ingrese un peso entre 1-100");
           pesoProducto = parseInt(pesoProducto);
       }
       temperaturaAlmacenamiento = prompt("Ingrese la temperatura de almacenamiento entre -30 y 30");
       temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);

       while(isNaN(temperaturaAlmacenamiento) || temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30)
       {
           temperaturaAlmacenamiento = prompt("Ingrese una temperatura valida entre -30 y 30");
           temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);
       }
       if(temperaturaAlmacenamiento%2 == 0)
       {
           contadorPares++;
       }

       if(contador == 0 || pesoProducto > productoMaximo)
       {
           productoMaximo = pesoProducto;
           marcaPesado = marca;
       }

       if(contador == 0 || pesoProducto < productoMinimo)
       {
           productoMinimo = pesoProducto;

       }

       if(temperaturaAlmacenamiento < 0)
       {
           contadorBajoCero++;
       }

       contador ++;
       acumulador = acumulador + pesoProducto;
       promedio = acumulador / contador;
       respuesta = prompt("Desea continuar? si/no");
   }

 
}

/* Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),  ----
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:  ----
a) La cantidad de temperaturas pares. -------
b) La marca del producto más pesado  ------
c) La cantidad de productos que se conservan a menos de 0 grados.  -----


d) El promedio del peso de todos los productos.	-----
f) El peso máximo y el mínimo. */

















/* var marca;
while(respuesta == "si")
{
    marca = prompt("Ingrese el nombre de la marca del producto");
    while(!isNaN(marca))
    {
        marca = prompt("Ingrese una marca valida");
    }

    pesoProducto = prompt("Ingrese el peso del producto");
    pesoProducto = parseInt(pesoProducto);
    while(isNaN(pesoProducto) || pesoProducto < 0 || pesoProducto >100)
    {
        pesoProducto = prompt("Ingrese un peso entre 1~100");
        pesoProducto = parseInt(pesoProducto);
    }

    temperaturaAlmacenamiento = prompt("Ingrese la temperatura de almacenamiento (entre -30 ~ 30 grados");
    temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);

    while(isNaN(temperaturaAlmacenamiento) || temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30)
    {
        temperaturaAlmacenamiento = prompt("Ingrese una temperatura valida");
        temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);
    }

    if(temperaturaAlmacenamiento%2==0)
    {
        contadorPares ++;
    }

    if(contador == 0 || pesoProducto > pesoMaximo)
    {
        pesoMaximo = pesoProducto;
        marcaMasPesado = marca;
    }

    if(contador == 0 || pesoProducto < pesoMinimo)
    {
        pesoMinimo = pesoProducto;
    }

    if(temperaturaAlmacenamiento < 0)
    {
        productosBajoCero ++;
    }
    contador ++;
    pesoPromedio = pesoProducto / contador;
    respuesta = prompt("Para continuar si/no");
}

console.log(contadorPares);
console.log(marcaMasPesado);
console.log(productosBajoCero);
console.log(pesoPromedio);
console.log(pesoMaximo);
console.log(pesoMinimo); */