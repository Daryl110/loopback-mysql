import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Pasajero} from '../models';
import {PasajeroRepository} from '../repositories';

export class PasajeroController {
  constructor(
    @repository(PasajeroRepository)
    public pasajeroRepository : PasajeroRepository,
  ) {}

  @post('/pasajeros', {
    responses: {
      '200': {
        description: 'Pasajero model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pasajero)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pasajero, {
            title: 'NewPasajero',
          }),
        },
      },
    })
    pasajero: Omit<Pasajero, 'id'>,
  ): Promise<Pasajero> {
    return this.pasajeroRepository.create(pasajero);
  }

  @get('/pasajeros/count', {
    responses: {
      '200': {
        description: 'Pasajero model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Pasajero)) where?: Where<Pasajero>,
  ): Promise<Count> {
    return this.pasajeroRepository.count(where);
  }

  @get('/pasajeros', {
    responses: {
      '200': {
        description: 'Array of Pasajero model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pasajero)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Pasajero)) filter?: Filter<Pasajero>,
  ): Promise<Pasajero[]> {
    return this.pasajeroRepository.find(filter);
  }

  @patch('/pasajeros', {
    responses: {
      '200': {
        description: 'Pasajero PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pasajero, {partial: true}),
        },
      },
    })
    pasajero: Pasajero,
    @param.query.object('where', getWhereSchemaFor(Pasajero)) where?: Where<Pasajero>,
  ): Promise<Count> {
    return this.pasajeroRepository.updateAll(pasajero, where);
  }

  @get('/pasajeros/{id}', {
    responses: {
      '200': {
        description: 'Pasajero model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pasajero)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Pasajero> {
    return this.pasajeroRepository.findById(id);
  }

  @patch('/pasajeros/{id}', {
    responses: {
      '204': {
        description: 'Pasajero PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pasajero, {partial: true}),
        },
      },
    })
    pasajero: Pasajero,
  ): Promise<void> {
    await this.pasajeroRepository.updateById(id, pasajero);
  }

  @put('/pasajeros/{id}', {
    responses: {
      '204': {
        description: 'Pasajero PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pasajero: Pasajero,
  ): Promise<void> {
    await this.pasajeroRepository.replaceById(id, pasajero);
  }

  @del('/pasajeros/{id}', {
    responses: {
      '204': {
        description: 'Pasajero DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pasajeroRepository.deleteById(id);
  }
}
