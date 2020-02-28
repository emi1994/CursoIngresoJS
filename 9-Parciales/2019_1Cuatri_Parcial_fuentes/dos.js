function mostrar()
{
  var nombreParejaUno;
  var nonmbreParejaDos;

  var pesoParejaUno;
  var pesoParejaDos;
  var pesoParejaSumado;
  var pesoParejaPromedio;

  nombreParejaUno = prompt("Ingrese el nombre y apellido de la primer persona");
  nonmbreParejaDos = prompt("Ingrese el nombre y apellido de la primer persona")
  pesoParejaUno = prompt("Ingrese el peso (numero) de la primer persona ");
  pesoParejaUno = parseInt(pesoParejaUno);
  pesoParejaDos = prompt("Ingrese el peso (numero) de la segunda persona")
  pesoParejaDos = parseInt(pesoParejaDos);

  pesoParejaSumado = pesoParejaUno + pesoParejaDos;
  pesoParejaSumado = parseInt(pesoParejaSumado);
  pesoParejaPromedio = pesoParejaSumado / 2;

  alert("Se llaman " + nombreParejaUno + " y " + nonmbreParejaDos + ", el peso sumado de la pareja es " + pesoParejaSumado + " y el peso promedio de ambos es " + pesoParejaPromedio);
}
