var pantalla = document.getElementById('pantalla');
class numero {
   constructor(id, valor) {
      this.id = id;
      this.valor = valor;
   }
}
//coleccion donde se crean las instancias de la clase numero
var coleccion = [];

coleccion.push(new numero(document.getElementById('n1'), 1));
coleccion[0].id.addEventListener('click', function () {
   numeros(0);
});

coleccion.push(new numero(document.getElementById('n2'), 2));
coleccion[1].id.addEventListener('click', function () {
   numeros(1);
});

coleccion.push(new numero(document.getElementById('n3'), 3));
coleccion[2].id.addEventListener('click', function () {
   numeros(2);
});

coleccion.push(new numero(document.getElementById('n4'), 4));
coleccion[3].id.addEventListener('click', function () {
   numeros(3);
});

coleccion.push(new numero(document.getElementById('n5'), 5));
coleccion[4].id.addEventListener('click', function () {
   numeros(4);
});

coleccion.push(new numero(document.getElementById('n6'), 6));
coleccion[5].id.addEventListener('click', function () {
   numeros(5);
});

coleccion.push(new numero(document.getElementById('n7'), 7));
coleccion[6].id.addEventListener('click', function () {
   numeros(6);
});

coleccion.push(new numero(document.getElementById('n8'), 8));
coleccion[7].id.addEventListener('click', function () {
   numeros(7);
});

coleccion.push(new numero(document.getElementById('n9'), 9));
coleccion[8].id.addEventListener('click', function () {
   numeros(8);
});

coleccion.push(new numero(document.getElementById('n0'), 0));
coleccion[9].id.addEventListener('click', function () {
   numeros(9);
});

//Funcion para mostrar los digitos.

function numeros(digito) {
   var contador = pantalla.innerHTML.length;

   if (contador < 10) {
      pantalla.innerHTML += coleccion[digito].valor;
   }
}

var listo = document.getElementById('Bo1');
listo.addEventListener('click', algoritmo);

var cancelar = document.getElementById('Bo2');
cancelar.addEventListener('click', eliminar);

var cancelar = document.getElementById('Bo3');
cancelar.addEventListener('click', cancela);
