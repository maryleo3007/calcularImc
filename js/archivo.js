var peso = document.getElementById('peso').value;
var talla = document.getElementById('talla').value;

var imc = peso/(talla*talla);
alert("Tu IMC es "+ imc);
