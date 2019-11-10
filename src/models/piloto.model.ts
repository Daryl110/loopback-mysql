import {Entity, model, property} from '@loopback/repository';

@model()
export class Piloto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;


  constructor(data?: Partial<Piloto>) {
    super(data);
  }
}

export interface PilotoRelations {
  // describe navigational properties here
}

export type PilotoWithRelations = Piloto & PilotoRelations;
