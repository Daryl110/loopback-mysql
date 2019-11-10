import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Aerolinea extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  idAeropuerto: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Aerolinea>) {
    super(data);
  }
}

export interface AerolineaRelations {
  // describe navigational properties here
}

export type AerolineaWithRelations = Aerolinea & AerolineaRelations;
