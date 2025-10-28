export class Categoria {
  idCategoria?: number;
  nombreCategoria: string;

  constructor(nombreCategoria: string, idCategoria?: number) {
    this.nombreCategoria = nombreCategoria;
    this.idCategoria = idCategoria;
  }
}
