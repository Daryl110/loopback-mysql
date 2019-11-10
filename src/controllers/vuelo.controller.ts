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
import {Vuelo} from '../models';
import {VueloRepository} from '../repositories';

export class VueloController {
  constructor(
    @repository(VueloRepository)
    public vueloRepository : VueloRepository,
  ) {}

  @post('/vuelos', {
    responses: {
      '200': {
        description: 'Vuelo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vuelo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vuelo, {
            title: 'NewVuelo',
            exclude: ['id'],
          }),
        },
      },
    })
    vuelo: Omit<Vuelo, 'id'>,
  ): Promise<Vuelo> {
    return this.vueloRepository.create(vuelo);
  }

  @get('/vuelos/count', {
    responses: {
      '200': {
        description: 'Vuelo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Vuelo)) where?: Where<Vuelo>,
  ): Promise<Count> {
    return this.vueloRepository.count(where);
  }

  @get('/vuelos', {
    responses: {
      '200': {
        description: 'Array of Vuelo model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Vuelo)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Vuelo)) filter?: Filter<Vuelo>,
  ): Promise<Vuelo[]> {
    return this.vueloRepository.find(filter);
  }

  @patch('/vuelos', {
    responses: {
      '200': {
        description: 'Vuelo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vuelo, {partial: true}),
        },
      },
    })
    vuelo: Vuelo,
    @param.query.object('where', getWhereSchemaFor(Vuelo)) where?: Where<Vuelo>,
  ): Promise<Count> {
    return this.vueloRepository.updateAll(vuelo, where);
  }

  @get('/vuelos/{id}', {
    responses: {
      '200': {
        description: 'Vuelo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vuelo)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Vuelo> {
    return this.vueloRepository.findById(id);
  }

  @patch('/vuelos/{id}', {
    responses: {
      '204': {
        description: 'Vuelo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vuelo, {partial: true}),
        },
      },
    })
    vuelo: Vuelo,
  ): Promise<void> {
    await this.vueloRepository.updateById(id, vuelo);
  }

  @put('/vuelos/{id}', {
    responses: {
      '204': {
        description: 'Vuelo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vuelo: Vuelo,
  ): Promise<void> {
    await this.vueloRepository.replaceById(id, vuelo);
  }

  @del('/vuelos/{id}', {
    responses: {
      '204': {
        description: 'Vuelo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vueloRepository.deleteById(id);
  }
}
