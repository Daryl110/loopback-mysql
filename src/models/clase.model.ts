import {Entity, model, property} from '@loopback/repository';

@model()
export class Clase extends Entity {
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
  descripcion: string;


  constructor(data?: Partial<Clase>) {
    super(data);
  }
}

export interface ClaseRelations {
  // describe navigational properties here
}

export type ClaseWithRelations = Clase & ClaseRelations;
