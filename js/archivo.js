var nombre = document.getElementById('nombre');
var peso = document.getElementById('peso');
var estatura = document.getElementById('estatura');
function calcularImc() {
  var resultado = peso.value * estatura.value;
  alert(""+nombre.value+" tu IMC es: "+resultado);
}
