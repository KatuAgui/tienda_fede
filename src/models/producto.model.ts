export class Producto {
  id?: number;                //id AUTO_INCREMENT
  nombre: string;             
  precio: number;             
  IdCategoria: number;        //relación con Categoría (FK)

  constructor(nombre: string, precio: number, IdCategoria: number, id?: number) {
    this.nombre = nombre;
    this.precio = precio;
    this.IdCategoria = IdCategoria;
    this.id = id;
  }
}

