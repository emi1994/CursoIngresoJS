/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaSuma;

	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);
	
	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);

	resultadoDeLaSuma = primerNumero - segundoNumero;

	console.log(resultadoDeLaSuma);
}


function restar()
{
	var primerNumero;
	var segundoNumero;
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
}

