const cajaDeRetiro = (rutas) => {
   const view = `
         <h3>Caja De Retiro</h3>
         <div class="cajaDeRetiro">
         ${rutas
            .map(({linkIMG, cantidadAEntregar}) => {
               let imagen = ``
               for (let i = 0; i < cantidadAEntregar; i++) {
                   imagen = imagen + `<img src="${linkIMG}">`;
               }
               return imagen;
            })
            .join('')}
         </div>
      `;
      console.log(rutas)
   return view;
};

export default cajaDeRetiro;
