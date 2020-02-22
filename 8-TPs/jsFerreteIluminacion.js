/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

//  */
// function CalcularPrecio() {
// 	var cantidadLamparas;
// 	var precioLampara = 35;
// 	var precioBruto;
// 	var precioDescuento = 0;
// 	var marcaLampara;

// 	cantidadLamparas = document.getElementById('Cantidad').value;
// 	cantidadLamparas = parseInt(cantidadLamparas);

// 	precioDescuento = document.getElementById("precioDescuento").value;
// 	precioDescuento = parseInt(precioDescuento);

// 	marcaLampara = document.getElementById('Marca').value;


// 	if (cantidadLamparas > 5) {
// 		precioBruto = cantidadLamparas * precioLampara;
// 		precioDescuento = precioBruto - (precioBruto * 50 / 100);
// 		document.getElementById("precioDescuento").value = precioDescuento;
// 	}
// 	if (cantidadLamparas == 5) {
// 		if (marcaLampara == "ArgentinaLuz") {
// 			precioBruto = cantidadLamparas * precioLampara;
// 			precioDescuento = precioBruto - (precioBruto * 40 / 100);
// 			document.getElementById("precioDescuento").value = precioDescuento;
// 		} else
// 			if (marcaLampara != "ArgentinaLuz") {
// 				precioBruto = cantidadLamparas * precioLampara;
// 				precioDescuento = precioBruto - (precioBruto * 30 / 100);
// 				document.getElementById("precioDescuento").value = precioDescuento;
// 			}

// 	}



// }


// function CalcularPrecio () 
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
// function CalcularPrecio() {
// 	var cantidad;
// 	var precio;
// 	precio = 35;
// 	var descuentoTotal;
// 	var marca;

// 	cantidad = document.getElementById('Cantidad').value;
// 	cantidad = parseInt(cantidad);
// 	marca = document.getElementById('Marca').value;

// 	if (cantidad > 5) {
// 		descuentoTotal = 50;
// 	} else {
// 		if (cantidad == 5) {
// 			if (marca == "ArgentinaLuz") {
// 				descuentoTotal = 40;
// 			} else {
// 				descuentoTotal = 30;
// 			}
// 		} else	{
// 			if (cantidad == 4) {
// 				if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
// 					descuentoTotal = 25;
// 				} else {
// 					descuentoTotal = 20;
// 				}
// 			} else {
// 				if (cantidad == 3) {
// 					if (marca == "ArgentinaLuz") {
// 						descuentoTotal = 15;
// 					} else {
// 						if (marca == "FelipeLamparas") {
// 							descuentoTotal = 10;
// 						} else {
// 							descuentoTotal = 5;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// 	descuento = precio * cantidad * descuentoTotal / 100;
// 	document.getElementById("precioDescuento").value = descuento;
// }

function CalcularPrecio() {
	var cantLamparas = document.getElementById('Cantidad').value;
	var descuento = 0;
	var marca = document.getElementById('Marca').value;
	var precio = 35;

	if(cantLamparas > 5){
		descuento = 0.50;
	}else{
		if(cantLamparas == 5){
			if(marca == "ArgenLuz"){
				descuento = 0.40;
			}else{
				descuento = 0.30;
			}
		}

		if(cantLamparas == 4){
			if(marca == "ArgenLuz" || marca == "FelipeLamparas"){
				descuento = 0.25;
			}else{
				descuento = 0.20;
			}
		}

		if(cantLamparas == 3){
			if(marca == "ArgenLuz"){
				descuento = 0.15;
			}else{
				if(marca == "FelipeLamparas"){
					descuento = 0.10;
				}else{
					descuento = 0.5;
				}
			}
		}
	}

	var precioConDescuento = (precio * cantLamparas) * (1 - descuento);
	 
	var precioConIIBB = precioConDescuento;
	if(precioConIIBB > 120){
		precioConIIBB = precioConIIBB * 1.1;
		alert('Usted pago ' + (precioConIIBB - precioConDescuento).toFixed(2) + ' de IIBB.');
	} 

	document.getElementById("precioDescuento").value = precioConIIBB.toFixed(2);

}
