import cajaDeBilletes from './cajaDeBilletes.js';
const entregarDinero = (dineroARetirar) => {
   let cantidadDeBilletes;
   let valorAentregar;
   cajaDeBilletes.forEach((billete) => {
      if (dineroARetirar > 0) {
         cantidadDeBilletes = Math.floor(dineroARetirar / billete.valor);
         if (cantidadDeBilletes > billete.cantidad) {
            valorAentregar = billete.cantidad;
         } else {
            valorAentregar = cantidadDeBilletes;
         }
         dineroARetirar = dineroARetirar - billete.valor * valorAentregar;
         billete.cantidad -= valorAentregar;
      }
   });
};
export default entregarDinero;
