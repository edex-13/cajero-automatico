const PANTALLA = document.getElementById('pantallaCajero');

const mostrarNumeros = (cantidadDeLetras, valor) => {
   let cantidadMaximaDeLetras = cantidadDeLetras >= 10;
   if (!cantidadMaximaDeLetras) {
      PANTALLA.innerText += valor;
   }else{
      alert("suuu")
   }
};
export default mostrarNumeros;
