import entregarDinero from '../js/entregarDinero.js';
const PANTALLA = document.getElementById('pantallaCajero');
const aceptarRetiro = () => {
   let dineroARetirar = parseInt(PANTALLA.textContent);
   let esValorInvalido = isNaN(dineroARetirar) || dineroARetirar == 0;
   if (esValorInvalido) {
      alert('Ingrese un valor valido');
   } else {
      entregarDinero(dineroARetirar);
   }
};
export default aceptarRetiro;
