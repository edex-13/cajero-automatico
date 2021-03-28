import entregarDinero from '../js/entregarDinero.js';
import cajaDeRetiro from '../templates/cajaDeRetiro.js';

const RETIRO = document.getElementById('retiro');
const PANTALLA = document.getElementById('pantallaCajero');
const aceptarRetiro = () => {
   let dineroARetirar = parseInt(PANTALLA.textContent);
   let esValorNoValido = isNaN(dineroARetirar) || dineroARetirar == 0;
   if (esValorNoValido) {
      alert('Ingrese un valor valido');
   } else {
      let dineroEntregado = entregarDinero(dineroARetirar);
      let vistaRetiro = cajaDeRetiro(dineroEntregado);
      RETIRO.innerHTML = vistaRetiro;
   }
};
export default aceptarRetiro;
