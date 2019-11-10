import {Entity, model, property} from '@loopback/repository';

@model()
export class VueloPasajero extends Entity {
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
  asiento: number;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'number',
    required: true,
  })
  idPasajero: number;

  @property({
    type: 'number',
    required: true,
  })
  idVuelo: number;

  @property({
    type: 'number',
    required: true,
  })
  idVendedor: number;

  @property({
    type: 'number',
    required: true,
  })
  idClase: number;


  constructor(data?: Partial<VueloPasajero>) {
    super(data);
  }
}

export interface VueloPasajeroRelations {
  // describe navigational properties here
}

export type VueloPasajeroWithRelations = VueloPasajero & VueloPasajeroRelations;
