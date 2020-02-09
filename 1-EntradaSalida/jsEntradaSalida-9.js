/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
//function mostrarAumento()
//{
//	// var sueldo;
//	// var resultado;
//
//
//	// sueldo = document.getElementById('sueldo').value;
//	// sueldo = parseInt(sueldo);
//
//	// resultado = sueldo * 10 / 100;
//	// console.log(resultado);
//
//	// document.getElementById('resultado').value = resultado;
//	
//
//	var importe;
//	var porcentaje;
//	var resultado;
//	var aumento;
//
//	porcentaje = 10;
//
//	importe = document.getElementById('sueldo').value;
//	importe = parseInt(importe);
//	
//	aumento = importe * porcentaje / 100;
//	resultado = importe + aumento;
//	document.getElementById('resultado').value = resultado;
//}


function mostrarAumento(){
	
	var importe
	var porcentaje
	var resultado
	var aumento
	
	
	porcentaje = 10;
	
	importe = document.getElementById('sueldo').value;
	importe = parseInt(importe);
	
	aumento = importe * porcentaje /100;
	
	resultado = importe + aumento;
	document.getElementById('resultado').value = resultado;
	
	
}