import cajaDeBilletes from './cajaDeBilletes.js';
const retirarDinero = (dineroARetirar) => {
   let cantidadNecesariaDeBilletes;
   let numeroDeBilletes;
   cajaDeBilletes.forEach((billete) => {
      billete.cantidadAEntregar = 0;
      if (dineroARetirar > 0) {
         cantidadNecesariaDeBilletes = Math.floor(dineroARetirar / billete.valor);
         let HayTodosLosBilletesNecesarios = cantidadNecesariaDeBilletes > billete.cantidad;
         if (HayTodosLosBilletesNecesarios) {
            //La cantidad necesaria de billetes es mayor a la cantidad total de billetes que hay
            numeroDeBilletes = billete.cantidad;
            // Entregamos todos los billetes que nos queden
         } else {
            numeroDeBilletes = cantidadNecesariaDeBilletes;
            // Entregamos solo los billetes que necesitamos
         }

         dineroARetirar = dineroARetirar - billete.valor * numeroDeBilletes;
         billete.cantidad -= numeroDeBilletes;
         billete.cantidadAEntregar = numeroDeBilletes;
      }
   });
   let noEntregoTodoElDinero = dineroARetirar > 0;
   if (noEntregoTodoElDinero) {
      alert('No podemos entregar dicha cantidad de dinero');
   } else {
      const dineroEntregado = cajaDeBilletes.filter(({cantidadAEntregar}) => {
         return cantidadAEntregar != 0;
      });
      return dineroEntregado;
   }
};
export default retirarDinero;
