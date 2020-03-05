
function mostrar()
{
    var ancho
    var largo 
    var perimetro

    //pedimos los datos
    ancho = prompt("Ingrese el ancho del rectangulo");
    ancho = parseInt(ancho);

    largo = prompt("Ingrese el largo del rectangulo");
    largo = parseInt(largo);

    // agregamos la logica
    perimetro = (ancho * 2) + (largo * 2);
    perimetro = parseInt(perimetro);

    // mostramos el resultado
    alert("El perimetro es de " + perimetro);
}


