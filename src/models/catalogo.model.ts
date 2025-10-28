export class Catalogo {
  idCatalogo?: number;       // id AUTO_INCREMENT
  idInventario: number;      // FK → inventarios
  idProducto: number;        // FK → productos
  stock: number;             // cantidad disponible
  stockMinimo: number;       // nivel mínimo de stock
  precioCompra: number;      // precio de compra por unidad

  constructor(
    idInventario: number,
    idProducto: number,
    stock: number,
    stockMinimo: number,
    precioCompra: number,
    idCatalogo?: number
  ) {
    this.idInventario = idInventario;
    this.idProducto = idProducto;
    this.stock = stock;
    this.stockMinimo = stockMinimo;
    this.precioCompra = precioCompra;
    this.idCatalogo = idCatalogo;
  }
}
