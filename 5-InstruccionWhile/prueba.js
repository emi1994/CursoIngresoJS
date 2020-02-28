function mostrar(){

var contador;
var nombreAlumno;
var nombreProfesor;
var notaAlumno;
var alumnoSexo;
var alumnoMes;
var respuesta = "si";






while(respuesta == "si"){
        contador = contador + 1;

        nombreAlumno = prompt("Ingrese el nombre del alumno");
        
        apellidoAlumno = prompt("Ingrese el apellido del alumno");

        nombreProfesor = prompt("Ingrese el nombre del profesor");
        
        notaAlumno = prompt("Ingrese la nota del Alumno")
        notaAlumno = parseInt(notaAlumno);
        while(notaAlumno < 0 || notaAlumno > 10){
            notaAlumno = prompt("Ingrese una nota entre el 1~10");
            notaAlumno = parseInt(notaAlumno);
        }

        alumnoSexo = prompt("Ingrese el sexo del alumno (F/M)");
        while(alumnoSexo !="F" && alumnoSexo !="M"){
            alumnoSexo = prompt("Ingrese F o M");
        }

        alumnoMes = prompt("Ingrese la nota del parcial");
        alumnoMes = parseInt(alumnoMes);

        while(alumnoMes < 0 || alumnoMes> 12 ){
            alumnoMes = prompt("Ingrese un mes valido del 1~12");
        }

    }
    respuesta = prompt("Ingrese si para continuar");
}



/* 
pedir nombre
pedir el apellido
pedir el sexo
pedir nota de parcial
pedir la fecha en la cual se rindio el examen
pedir el nombre del profesor

*/
