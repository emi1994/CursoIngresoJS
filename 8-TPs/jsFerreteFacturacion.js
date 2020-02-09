/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerItem;
	var segundoItem;
	var tercerItem;
	var resultadoSuma;
	
	
	primerItem = document.getElementById('PrecioUno').value;
	primerItem = parseInt(primerItem);
	
	segundoItem = document.getElementById('PrecioDos').value;
	segundoItem = parseInt(segundoItem);
	
	tercerItem = document.getElementById('PrecioTres').value;
	tercerItem = parseInt(tercerItem);
	
	resultadoSuma = primerItem + segundoItem + tercerItem;
	alert(resultadoSuma);
	
}
function Promedio () 
{
	var primerItem;
	var segundoItem;
	var tercerItem;
	var resultadoPromedio;
	
	
	primerItem = document.getElementById('PrecioUno').value;
	primerItem = parseInt(primerItem);
	
	segundoItem = document.getElementById('PrecioDos').value;
	segundoItem = parseInt(segundoItem);
	
	tercerItem = document.getElementById('PrecioTres').value;
	tercerItem = parseInt(tercerItem);
	
	resultadoPromedio = (primerItem + segundoItem + tercerItem) / 3;
	alert(resultadoPromedio);
}
function PrecioFinal () 
{
	var primerItem;
	var segundoItem;
	var tercerItem;
	var resultadoItems;
	var iva = 21;
	
	
	primerItem = document.getElementById('PrecioUno').value;
	primerItem = parseInt(primerItem);
	
	segundoItem = document.getElementById('PrecioDos').value;
	segundoItem = parseInt(segundoItem);
	
	tercerItem = document.getElementById('PrecioTres').value;
	tercerItem = parseInt(tercerItem);
	
	resultadoItems = (primerItem + segundoItem + tercerItem);
	iva = resultadoItems + resultadoItems * iva/100;
	alert(iva);
}