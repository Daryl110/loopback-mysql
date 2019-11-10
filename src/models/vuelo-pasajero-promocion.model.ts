import {Entity, model, property} from '@loopback/repository';

@model()
export class VueloPasajeroPromocion extends Entity {
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
  idVueloPasajero: number;

  @property({
    type: 'number',
    required: true,
  })
  idPromocion: number;


  constructor(data?: Partial<VueloPasajeroPromocion>) {
    super(data);
  }
}

export interface VueloPasajeroPromocionRelations {
  // describe navigational properties here
}

export type VueloPasajeroPromocionWithRelations = VueloPasajeroPromocion & VueloPasajeroPromocionRelations;
