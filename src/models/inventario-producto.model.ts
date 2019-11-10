import {Entity, model, property} from '@loopback/repository';

@model()
export class InventarioProducto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  idProducto: number;

  @property({
    type: 'number',
    required: true,
  })
  idInventario: number;


  constructor(data?: Partial<InventarioProducto>) {
    super(data);
  }
}

export interface InventarioProductoRelations {
  // describe navigational properties here
}

export type InventarioProductoWithRelations = InventarioProducto & InventarioProductoRelations;
