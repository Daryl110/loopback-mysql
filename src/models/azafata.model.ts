import {Entity, model, property} from '@loopback/repository';

@model()
export class Azafata extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;


  constructor(data?: Partial<Azafata>) {
    super(data);
  }
}

export interface AzafataRelations {
  // describe navigational properties here
}

export type AzafataWithRelations = Azafata & AzafataRelations;
