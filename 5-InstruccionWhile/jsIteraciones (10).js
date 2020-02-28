function mostrar(){

	var contador;
	var nombreAlumno;
	var nombreProfesor;
	var notaAlumno;
	var alumnoSexo;
	var alumnoMes;
	var respuesta;
	var notaMasBaja = 10;
	var sexoBaja;


	contador = 0;
	respuesta = "si";

	while(respuesta == "si")
	{
	
			nombreAlumno = prompt("Ingrese el nombre del alumno");
			
			apellidoAlumno = prompt("Ingrese el apellido del alumno");
	
			nombreProfesor = prompt("Ingrese el nombre del profesor");
			
			notaAlumno = prompt("Ingrese la nota del Alumno");
			notaAlumno = parseInt(notaAlumno);
			while(notaAlumno < 0 || notaAlumno > 10){
				notaAlumno = prompt("Ingrese una nota entre el 1~10");
				notaAlumno = parseInt(notaAlumno);
			}
	
			alumnoSexo = prompt("Ingrese el sexo del alumno (F/M)");
			while(alumnoSexo !="f" && alumnoSexo !="m"){
				alumnoSexo = prompt("Ingrese f o M");
			}
	
			alumnoMes = prompt("Ingrese el mes del examen");
			alumnoMes = parseInt(alumnoMes);
	
			while(alumnoMes < 0 || alumnoMes > 12 ){
				alumnoMes = prompt("Ingrese un mes valido del 1~12");
			}
				//x          //10
			if(notaAlumno < notaMasBaja){
				//10 		
				notaMasBaja = notaAlumno;
				sexoBaja = alumnoSexo;
			}

			respuesta = prompt("Ingrese si para continuar");
			contador = contador + 1;

	}
	console.log(nombreAlumno);
	console.log(apellidoAlumno);
	console.log(nombreProfesor);
	console.log(notaAlumno);
	console.log(alumnoSexo);
	console.log(alumnoMes);
	console.log(contador);
	console.log(notaMasBaja);
}
	
	
	
	
	/* 
	pedir nombre
	pedir el apellido
	pedir el sexo
	pedir nota de parcial
	pedir la fecha en la cual se rindio el examen
	pedir el nombre del profesor

	cual fue la nota mas alta, de que sexo y en que numero de mes
	
	*/






























/* function mostrar()
{

	var contador;
	var respuesta;
	var notaAlumno;
	var sexoAlumno;
	var edadAlumno;
	var edad = 0;
	var nombreAlumno;
	var acumulador;
	var promedioNotas;
	var mejorNota;
	var peorNota;
	var bandera;
	var contadorDeMujeres;


	mejorNotaHombres=-1;

	contador=0;//#1 inicializar para ingresar
	acumulador=0;
	contadorDeMujeres=0;
	respuesta="si";
	//declarar contadores y variables 
	
	//while(contador<5)//#2 defino la logica
	while(respuesta=="si")
	{
		contador=contador+1;//#3 cambio la variable de la logica
		

		nombreAlumno=prompt("ingrese su nombre");


		notaAlumno=prompt("ingrese el "+contador+"º numero :");
		notaAlumno=parseInt(notaAlumno);
		while(notaAlumno<0 || notaAlumno>10)//bien
		{
			notaAlumno=prompt("error,reingrese el "+contador+"º numero :");
			notaAlumno=parseInt(notaAlumno);
		}

		sexoAlumno= prompt("ingrese f o m");
		while(sexoAlumno!="f" && sexoAlumno!="m")//casi bien
		{
			sexoAlumno= prompt("ingrese f o m");
		}

		edadAlumno=prompt("ingrese el "+contador+"º edad :");
		edadAlumno=parseInt(edadAlumno);
		while(edadAlumno<0 || edadAlumno>100)//bien
		{
			edadAlumno=prompt("error,reingrese el "+contador+"º edad :");
			edadAlumno=parseInt(edadAlumno);
		}
		edadAlumno=prompt("ingrese el "+contador+"º edad :");
		edadAlumno=parseInt(edadAlumno);
		while(edadAlumno<0 || edadAlumno>100)//bien
		{
			edadAlumno=prompt("error,reingrese el "+contador+"º edad :");
			edadAlumno=parseInt(edadAlumno);
		}


		//termino el ingreso

		
		if(sexoAlumno=="f")
		{
			contadorDeMujeres= contadorDeMujeres+1;

		}else
		{
			if(mejorNotaHombres==-1)
			{
				mejorNotaHombres=notaAlumno;
				
				
			}
			else
			{
				if(notaAlumno>mejorNotaHombres)
				{
					mejorNotaHombres=notaAlumno;

				}

			}

		}




		if(contador==1)
		{
			mejorNota=notaAlumno;
			peorNota=notaAlumno;
			edadPrimerAlumno=edad;
		}
		else
		{

			if(notaAlumno>mejorNota)
			{
				mejorNota=notaAlumno;
				mejorNotaNombre=nombre;

			}

			if(notaAlumno<peorNota)
			{
				peorNota=notaAlumno;
			}
		}


		acumulador=acumulador+notaAlumno;
		respuesta=prompt("si para seguir");
	}//fin while 

	promedioNotas=acumulador/contador;

	console.log("contador:"+contador);
	console.log("acumulador:"+acumulador);
	console.log("mejorNota:"+mejorNota);
	console.log("peorNota:"+peorNota);
	
}//FIN DE LA FUNCIÓN */