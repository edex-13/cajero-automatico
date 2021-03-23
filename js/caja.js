var listo = document.getElementById('registrar');
listo.addEventListener('click', bobeda);
var Bi500 = document.getElementById('Bi500');
var Bi200 = document.getElementById('Bi200');
var Bi100 = document.getElementById('Bi100');
var Bi50 = document.getElementById('Bi50');
var Bi20 = document.getElementById('Bi20');
var Bi10 = document.getElementById('Bi10');
function bobeda() {
   var a1 = parseInt(Bi500.value);
   var a2 = parseInt(Bi200.value);
   var a3 = parseInt(Bi100.value);
   var a4 = parseInt(Bi50.value);
   var a5 = parseInt(Bi20.value);
   var a6 = parseInt(Bi10.value);
   console.log(a1, a2, a3, a4, a5, a6);
}
