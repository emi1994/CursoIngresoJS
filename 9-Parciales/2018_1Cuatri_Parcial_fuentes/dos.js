function mostrar()
{
  var nombre;
  var localidad;


  // tomamos los datos por ID
  nombre = document.getElementById("elNombre").value;
  localidad = document.getElementById("laLocalidad").value;

  // mostramos los datos
  alert("Usted es " + nombre + " y vive en la localidad de " + localidad);
}
