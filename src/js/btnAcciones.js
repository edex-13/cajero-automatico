import aceptar from '../utils/aceptar.js';
import borrar from '../utils/borrar.js';
import eliminarTodo from '../utils/eliminarTodo.js';

const BTN_ACEPTAR = document.getElementById('btn_aceptar');
const BTN_BORRAR = document.getElementById('btn_borrar');
const BTN_ELIMINAR_TODO = document.getElementById('btn_eliminarTodo');

const btnAcciones = () => {
   BTN_ACEPTAR.addEventListener('click', () => {
      aceptar();
   });
   BTN_BORRAR.addEventListener('click', () => {
      borrar();
   });
   BTN_ELIMINAR_TODO.addEventListener('click', () => {
      eliminarTodo();
   });
};
export default btnAcciones;
