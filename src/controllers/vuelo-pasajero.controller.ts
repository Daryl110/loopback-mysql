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
import {VueloPasajero} from '../models';
import {VueloPasajeroRepository} from '../repositories';

export class VueloPasajeroController {
  constructor(
    @repository(VueloPasajeroRepository)
    public vueloPasajeroRepository : VueloPasajeroRepository,
  ) {}

  @post('/vuelo-pasajeros', {
    responses: {
      '200': {
        description: 'VueloPasajero model instance',
        content: {'application/json': {schema: getModelSchemaRef(VueloPasajero)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VueloPasajero, {
            title: 'NewVueloPasajero',
            exclude: ['id'],
          }),
        },
      },
    })
    vueloPasajero: Omit<VueloPasajero, 'id'>,
  ): Promise<VueloPasajero> {
    return this.vueloPasajeroRepository.create(vueloPasajero);
  }

  @get('/vuelo-pasajeros/count', {
    responses: {
      '200': {
        description: 'VueloPasajero model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(VueloPasajero)) where?: Where<VueloPasajero>,
  ): Promise<Count> {
    return this.vueloPasajeroRepository.count(where);
  }

  @get('/vuelo-pasajeros', {
    responses: {
      '200': {
        description: 'Array of VueloPasajero model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(VueloPasajero)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(VueloPasajero)) filter?: Filter<VueloPasajero>,
  ): Promise<VueloPasajero[]> {
    return this.vueloPasajeroRepository.find(filter);
  }

  @patch('/vuelo-pasajeros', {
    responses: {
      '200': {
        description: 'VueloPasajero PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VueloPasajero, {partial: true}),
        },
      },
    })
    vueloPasajero: VueloPasajero,
    @param.query.object('where', getWhereSchemaFor(VueloPasajero)) where?: Where<VueloPasajero>,
  ): Promise<Count> {
    return this.vueloPasajeroRepository.updateAll(vueloPasajero, where);
  }

  @get('/vuelo-pasajeros/{id}', {
    responses: {
      '200': {
        description: 'VueloPasajero model instance',
        content: {'application/json': {schema: getModelSchemaRef(VueloPasajero)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<VueloPasajero> {
    return this.vueloPasajeroRepository.findById(id);
  }

  @patch('/vuelo-pasajeros/{id}', {
    responses: {
      '204': {
        description: 'VueloPasajero PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VueloPasajero, {partial: true}),
        },
      },
    })
    vueloPasajero: VueloPasajero,
  ): Promise<void> {
    await this.vueloPasajeroRepository.updateById(id, vueloPasajero);
  }

  @put('/vuelo-pasajeros/{id}', {
    responses: {
      '204': {
        description: 'VueloPasajero PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vueloPasajero: VueloPasajero,
  ): Promise<void> {
    await this.vueloPasajeroRepository.replaceById(id, vueloPasajero);
  }

  @del('/vuelo-pasajeros/{id}', {
    responses: {
      '204': {
        description: 'VueloPasajero DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vueloPasajeroRepository.deleteById(id);
  }
}
