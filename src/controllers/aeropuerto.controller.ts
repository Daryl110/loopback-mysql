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
import {Aeropuerto} from '../models';
import {AeropuertoRepository} from '../repositories';

export class AeropuertoController {
  constructor(
    @repository(AeropuertoRepository)
    public aeropuertoRepository : AeropuertoRepository,
  ) {}

  @post('/aeropuertos', {
    responses: {
      '200': {
        description: 'Aeropuerto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Aeropuerto)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aeropuerto, {
            title: 'NewAeropuerto',
            exclude: ['id'],
          }),
        },
      },
    })
    aeropuerto: Omit<Aeropuerto, 'id'>,
  ): Promise<Aeropuerto> {
    return this.aeropuertoRepository.create(aeropuerto);
  }

  @get('/aeropuertos/count', {
    responses: {
      '200': {
        description: 'Aeropuerto model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Aeropuerto)) where?: Where<Aeropuerto>,
  ): Promise<Count> {
    return this.aeropuertoRepository.count(where);
  }

  @get('/aeropuertos', {
    responses: {
      '200': {
        description: 'Array of Aeropuerto model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Aeropuerto)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Aeropuerto)) filter?: Filter<Aeropuerto>,
  ): Promise<Aeropuerto[]> {
    return this.aeropuertoRepository.find(filter);
  }

  @patch('/aeropuertos', {
    responses: {
      '200': {
        description: 'Aeropuerto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aeropuerto, {partial: true}),
        },
      },
    })
    aeropuerto: Aeropuerto,
    @param.query.object('where', getWhereSchemaFor(Aeropuerto)) where?: Where<Aeropuerto>,
  ): Promise<Count> {
    return this.aeropuertoRepository.updateAll(aeropuerto, where);
  }

  @get('/aeropuertos/{id}', {
    responses: {
      '200': {
        description: 'Aeropuerto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Aeropuerto)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Aeropuerto> {
    return this.aeropuertoRepository.findById(id);
  }

  @patch('/aeropuertos/{id}', {
    responses: {
      '204': {
        description: 'Aeropuerto PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aeropuerto, {partial: true}),
        },
      },
    })
    aeropuerto: Aeropuerto,
  ): Promise<void> {
    await this.aeropuertoRepository.updateById(id, aeropuerto);
  }

  @put('/aeropuertos/{id}', {
    responses: {
      '204': {
        description: 'Aeropuerto PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() aeropuerto: Aeropuerto,
  ): Promise<void> {
    await this.aeropuertoRepository.replaceById(id, aeropuerto);
  }

  @del('/aeropuertos/{id}', {
    responses: {
      '204': {
        description: 'Aeropuerto DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.aeropuertoRepository.deleteById(id);
  }
}
