import {Entity, model, property} from '@loopback/repository';

@model()
export class Avion extends Entity {
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
  cantidadPuestos: number;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
  })
  modelo?: string;

  @property({
    type: 'number',
    required: true,
  })
  idAerolinea: number;


  constructor(data?: Partial<Avion>) {
    super(data);
  }
}

export interface AvionRelations {
  // describe navigational properties here
}

export type AvionWithRelations = Avion & AvionRelations;
