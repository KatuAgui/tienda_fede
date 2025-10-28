export class Inventario {
  idInventario?: number;      // id AUTO_INCREMENT
  nombreInventario: string;   // 
  ubicacion: string;          // 
  fechaCreacion?: string;     // fecha de creación (opcional, por defecto CURDATE())

  constructor(nombreInventario: string, ubicacion: string, fechaCreacion?: string, idInventario?: number) {
    this.nombreInventario = nombreInventario;
    this.ubicacion = ubicacion;
    this.fechaCreacion = fechaCreacion;
    this.idInventario = idInventario;
  }
}
