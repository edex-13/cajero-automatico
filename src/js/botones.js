import mostrarNumeros from '../utils/mostrarNumeros.js'
let cantidadDeLetras = 0;
class btn {
   constructor(id, valor) {
      this.id = document.getElementById(id);
      this.valor = valor;
   }
   agregarEventoClick() {
      this.id.addEventListener('click', () => {
         mostrarNumeros(cantidadDeLetras, this.valor)
         cantidadDeLetras++;
      });
   }
}
//coleccion donde se crean las instancias de la clase btn
let colecionBotones = [];

colecionBotones.push(new btn('btn_numero1', 1));
colecionBotones.push(new btn('btn_numero2', 2));
colecionBotones.push(new btn('btn_numero3', 3));
colecionBotones.push(new btn('btn_numero4', 4));
colecionBotones.push(new btn('btn_numero5', 5));
colecionBotones.push(new btn('btn_numero6', 6));
colecionBotones.push(new btn('btn_numero7', 7));
colecionBotones.push(new btn('btn_numero8', 8));
colecionBotones.push(new btn('btn_numero9', 9));
colecionBotones.push(new btn('btn_numero0', 0));

function agregarEventoClick() {
   colecionBotones.forEach((btn) => {
      btn.agregarEventoClick();
   });
}
export default agregarEventoClick;