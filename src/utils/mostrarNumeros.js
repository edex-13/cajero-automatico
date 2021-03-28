const PANTALLA = document.getElementById('pantallaCajero');

const mostrarNumeros = (valor) => {
   let textPantalla = PANTALLA.textContent;
   let cantidadMaximaDeLetras = textPantalla.length >=10 
   if (!cantidadMaximaDeLetras) {
      PANTALLA.innerText += valor;
   }else{
      alert("MAXIMO DE DIGITOS INGRESADOS")
   }
};
export default mostrarNumeros;
