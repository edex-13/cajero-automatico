class Billete {
   constructor(valor, cantidad, link) {
      this.valor = valor;
      this.cantidad = cantidad;
      this.linkIMG = link;
      this.cantidadAEntregar = 0;
   }
}
let cajaDeBilletes = [];
cajaDeBilletes.push(new Billete(500, 100, '/Img/500.png'));
cajaDeBilletes.push(new Billete(200, 100, '/Img/200.png'));
cajaDeBilletes.push(new Billete(100, 100, '/Img/100.png'));
cajaDeBilletes.push(new Billete(50, 100, '/Img/50.png'));
cajaDeBilletes.push(new Billete(20, 100, '/Img/20.png'));
cajaDeBilletes.push(new Billete(10, 100, '/Img/10.png'));

export default cajaDeBilletes;
