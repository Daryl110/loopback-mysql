import {Entity, model, property} from '@loopback/repository';

@model()
export class VueloAzafata extends Entity {
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
  idAzafata: number;

  @property({
    type: 'number',
    required: true,
  })
  idVuelo: number;


  constructor(data?: Partial<VueloAzafata>) {
    super(data);
  }
}

export interface VueloAzafataRelations {
  // describe navigational properties here
}

export type VueloAzafataWithRelations = VueloAzafata & VueloAzafataRelations;
