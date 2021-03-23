//ALGORITMO PARA EL FUNCIONAMIENTO.

class Billete {
   constructor(valor, cantidad, link) {
      this.valor = valor;
      this.cantidad = cantidad;
      this.imagen = new Image();
      this.imagen.src = link;
   }
}
var DicImagen = [];

DicImagen['500'] = 'img/500.png';
DicImagen['200'] = 'img/200.png';
DicImagen['100'] = 'img/100.png';
DicImagen['50'] = 'img/50.png';
DicImagen['20'] = 'img/20.png';
DicImagen['10'] = 'img/10.png';

var resultado = document.getElementById('billetesText');
var imagenes = document.getElementById('billetesImg');

var ddcaja = document.getElementById('caja');

var ingresado = 240;

var dinero = 0;

var papel = 0;
var div = 0;
var entregado = [];

var caja = [];
caja.push(new Billete(500, Bi500, ''));
caja.push(new Billete(200, Bi200, ''));
caja.push(new Billete(100, Bi100, ''));
caja.push(new Billete(50, Bi50, ''));
caja.push(new Billete(20, Bi20, ''));
caja.push(new Billete(10, Bi10, ''));

function algoritmo() {
   if (pantalla.innerText == '0101') {
      ddcaja.style.display = 'block';
   } else {
      dinero = parseInt(pantalla.innerHTML);

      for (var b of caja) {
         if (dinero > 0) {
            div = Math.floor(dinero / b.valor);

            if (div > b.cantidad) {
               papel = b.cantidad;

               b.cantidad = b.cantidad - papel;
            } else {
               papel = div;
               b.cantidad = b.cantidad - papel;
            }

            entregado.push(new Billete(b.valor, papel, DicImagen[b.valor]));

            dinero = dinero - b.valor * papel;
         }
      }
      resultado.innerHTML += 'Entregado $' + pantalla.innerHTML + ': <br>';

      if (dinero > 0) {
         resultado.innerHTML += 'Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(';
         caja.valor = 10;
      } else {
         for (var e of entregado) {
            if (e.cantidad > 0) {
               resultado.innerHTML += e.cantidad + ' billetes de $' + e.valor + '<br />';
               for (var i = 0; i < e.cantidad; i++) {
                  imagenes.innerHTML += '<img src=' + '"' + e.imagen.src + '"' + '/>' + '		';
               }
            }
         }
      }

      entregado = [];
   }
}

function cancela() {
   pantalla.innerHTML = '';
}

function eliminar() {
   var cadena = pantalla.innerHTML.slice(0, -1);
   pantalla.innerHTML = cadena;
}
