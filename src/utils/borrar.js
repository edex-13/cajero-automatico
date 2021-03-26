const PANTALLA = document.getElementById('pantallaCajero');

const borrar = () => {
   let textPantalla = PANTALLA.textContent;
   PANTALLA.innerText = textPantalla.slice(0, -1);
};
export default borrar;
