/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultadoResta;
	
	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);
	
	resultadoResta = primerNumero - segundoNumero;
	alert(resultadoResta);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var resultadoMulti;
	
	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);
	
	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);
	
	resultadoMulti = primerNumero * segundoNumero;
	alert(resultadoMulti);
	
	
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var resultadoDivision;
	
	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);
	
	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);
	
	resultadoDivision = primerNumero / segundoNumero;
	alert(resultadoDivision);
		
}

function sumar(){
	
	var primerNumero;
	var segundoNumero;
	var resultadoSuma;
	
	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);
	
	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);
	
	resultadoSuma = primerNumero + segundoNumero;
	alert(resultadoSuma);
	

	
}