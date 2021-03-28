const PANTALLA = document.getElementById('pantallaCajero');

const borrar = () => {
   let textoPantalla = PANTALLA.textContent;
   PANTALLA.innerText = textoPantalla.slice(0, -1);
};
export default borrar;
