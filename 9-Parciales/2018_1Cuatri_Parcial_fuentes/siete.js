function mostrar()
{
    var notaAlumno;
    var sexoAlumno;
    var notaBaja;
    var sexoBaja;
    var contador;
    var contadorVarones;
    var acumulador;
    var promedio;

    // inicializamos los contadores
    contador = 0;
    acumulador = 0;
    notaBaja = 10;
    contadorVarones = 0;

    // preguntamos los datos y validamos
    while(contador < 5)
    {
        notaAlumno = prompt("Ingrese una nota entre 1~10");
        notaAlumno = parseInt(notaAlumno);

        while(notaAlumno < 1 || notaAlumno > 10)
            {
                notaAlumno = prompt("Ingrese una nota valida entre 1~10");
                notaAlumno = parseInt(notaAlumno);
            }
        
        sexoAlumno = prompt("Ingrese el sexo del alumno con f/m");

        while(sexoAlumno != "f" && sexoAlumno !="m")
            {
                sexoAlumno = prompt("Ingrese el sexo con f/m");
            }

    // ingresamos la logica
        if(notaAlumno < notaBaja)
            {
                notaBaja = notaAlumno;
                sexoBaja = sexoAlumno;
            }
        if(sexoAlumno == "m" && notaAlumno > 5)
            {
            contadorVarones ++;  
            }

        contador++;
        acumulador = acumulador + notaAlumno;
        promedio = acumulador / contador;
    }

    // resultados
    console.log(contador);
    console.log(acumulador);
    console.log(promedio);
    console.log(contadorVarones);
    console.log(notaBaja);
    console.log(sexoBaja);
}
