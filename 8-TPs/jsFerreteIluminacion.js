/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidadLamparas;
	var precioLampara = 35;
	var precioBruto;
	var precioDescuento = 0;
	var marcaLampara;

	cantidadLamparas = document.getElementById('Cantidad').value;
	cantidadLamparas = parseInt(cantidadLamparas);

	precioDescuento = document.getElementById("precioDescuento").value;
	precioDescuento = parseInt(precioDescuento);

	marcaLampara = document.getElementById('Marca').value;


	if(cantidadLamparas > 5)
	{
		precioBruto = cantidadLamparas * precioLampara;
		precioDescuento = precioBruto - (precioBruto * 50 /100);
		document.getElementById("precioDescuento").value = precioDescuento;
	}
	if(cantidadLamparas == 5)
	{
		if(marcaLampara == "ArgentinaLuz")
		{
			precioBruto = cantidadLamparas * precioLampara;
			precioDescuento = precioBruto - (precioBruto * 40 /100);
			document.getElementById("precioDescuento").value = precioDescuento;
		}else
			if(marcaLampara !="ArgentinaLuz")
			{
				precioBruto = cantidadLamparas * precioLampara;
				precioDescuento = precioBruto - (precioBruto * 30 /100);
				document.getElementById("precioDescuento").value = precioDescuento;
			}
			
	}


 	
}


// function CalcularPrecio () 
// {
// 	var cantidadLamparas;
// 	var precioBruto;
// 	var precioFinal;
// 	var marcaLampara;


// 	cantidadLamparas = document.getElementById('Cantidad').value;
// 	cantidadLamparas = parseInt(cantidadLamparas);

// 	marcaLampara=document.getElementById('Marca').value;
// 	precioBruto= cantidadLamparas * 35;

// 	if(cantidadLamparas > 5)
// 	{
// 		precioFinal = precioBruto - precioBruto * 50 / 100;
// 		document.getElementById('precioDescuento').value = precioFinal;
// 	}
// 	if(cantidadLamparas == 5)
// 	{
// 		if (marca = "ArgentinaLuz") 
// 		{
// 			precioFinal = precioBruto - precioBruto * 40 / 100;
// 			document.getElementById('precioDescuento').value = precioFinal;
// 		}else
// 		{
// 			precioFinal = precioBruto - precioBruto * 30 / 100;
// 			document.getElementById('precioDescuento').value = precioFinal;
// 		}

// 		precioFinal = precioBruto - precioBruto * 50 / 100;
// 		document.getElementById('precioDescuento').value = precioFinal;
// 	}


// }

