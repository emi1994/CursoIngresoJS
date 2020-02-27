//nombre del alumno
// nota alumno
// sexo alumno
// edad alumno
// fin del ingreso


//sacar la cantidad de hombres
//sacar la cantidad de mujeres
// sacar las notas de los hombres
// sacar las notas de las mujeres
// sacar mejor nota
// sacar peor nota
// fin de la logica
// sacar promedio de notas

function mostrar()
{
	var contador;
	var respuesta;
	var nombreDelAlumno;
	var notaDelAlumno;
	var edadAlumno;
	var sexoAlumno;
	var contadorDeMujeres;
	var contadorDeHombres;
	var notaAlumnoHombres;
	var notaAlumnoMujeres;
	var mejorNota;
	var peorNota;
	var promedioNotas


	//inicializar las variables
	respuesta = "si";
	contador = 0;
	contadorDeMujeres = 0;
	contadorDeHombres = 0;
	acumulador = 0;

	while(respuesta == "si")
	{
		contador ++;
		nombreDelAlumno = prompt("Ingrese el nombre del alumno");

		notaDelAlumno = prompt("Ingrese la nota del alumno");
		notaDelAlumno = parseInt(notaDelAlumno);

		while(notaDelAlumno < 0 || notaDelAlumno > 10)
		{
			notaDelAlumno = prompt("Error: ingrese una nota entre 1-10");
			notaDelAlumno = parseInt(notaDelAlumno);
		}

		edadAlumno = prompt("Escriba la edad del alumno");
		edadAlumno = parseInt(edadAlumno);

		while(edadAlumno < 18 || edadAlumno > 110)
		{
			edadAlumno = prompt("Ingrese una edad entre 18-110 años");
			edadAlumno = parseInt(edadAlumno);
		}

		sexoAlumno = prompt("Escriba el sexo del alumno (f/m)")

		while(sexoAlumno != "f" && sexoAlumno != "m")
		{
		 	sexoAlumno = prompt("Error: Tiene que escribir f o m");

		}

      //////fin del ingreso

      if(sexoAlumno == "f")
      {
      	contadorDeMujeres ++;
      	notaAlumnoMujeres = notaDelAlumno;
      }else
      {
      	contadorDeHombres ++;
      	notaAlumnoHombres = notaAlumnoHombres;
      }

      if(contador == 1)
      {
      	mejorNota = notaDelAlumno;
      	peorNota = notaDelAlumno;
      }else
      {
      	if (notaDelAlumno > mejorNota) 
      	{
      		mejorNota = notaDelAlumno;
      	}

      	if(notaDelAlumno < peorNota)
      	{
      		peorNota = notaDelAlumno;
      	}
      }

     acumulador = acumulador + notaDelAlumno;
     respuesta = prompt("Escriba si para continuar");

     promedioNotas = acumulador / contador;





	}


	console.log(notaDelAlumno);
	console.log(mejorNota);
	console.log(peorNota);
	console.log(promedioNotas);
	console.log(contadorDeMujeres);


}