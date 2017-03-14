var nombre = ["Nallely", "Miriam","Ann", "Lala"];
var apellido = ["Hernandez","Gonzalez", "Perez","Lele"];
function nombreApellido() {
  var largoNombre = nombre.length;
  var nombres = [];
  for ( var i = largoNombre -1; i >= 0; i--){

    nombres.push(nombre[i]+ " "+ apellido[i]);
  }
  return nombres;
}
 console.log( nombreApellido(nombre, apellido));
