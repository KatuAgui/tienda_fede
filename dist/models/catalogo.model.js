"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalogo = void 0;
class Catalogo {
    constructor(idInventario, idProducto, stock, stockMinimo, precioCompra, idCatalogo) {
        this.idInventario = idInventario;
        this.idProducto = idProducto;
        this.stock = stock;
        this.stockMinimo = stockMinimo;
        this.precioCompra = precioCompra;
        this.idCatalogo = idCatalogo;
    }
}
exports.Catalogo = Catalogo;
