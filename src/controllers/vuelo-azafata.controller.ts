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
import {VueloAzafata} from '../models';
import {VueloAzafataRepository} from '../repositories';

export class VueloAzafataController {
  constructor(
    @repository(VueloAzafataRepository)
    public vueloAzafataRepository : VueloAzafataRepository,
  ) {}

  @post('/vuelo-azafatas', {
    responses: {
      '200': {
        description: 'VueloAzafata model instance',
        content: {'application/json': {schema: getModelSchemaRef(VueloAzafata)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VueloAzafata, {
            title: 'NewVueloAzafata',
            exclude: ['id'],
          }),
        },
      },
    })
    vueloAzafata: Omit<VueloAzafata, 'id'>,
  ): Promise<VueloAzafata> {
    return this.vueloAzafataRepository.create(vueloAzafata);
  }

  @get('/vuelo-azafatas/count', {
    responses: {
      '200': {
        description: 'VueloAzafata model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(VueloAzafata)) where?: Where<VueloAzafata>,
  ): Promise<Count> {
    return this.vueloAzafataRepository.count(where);
  }

  @get('/vuelo-azafatas', {
    responses: {
      '200': {
        description: 'Array of VueloAzafata model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(VueloAzafata)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(VueloAzafata)) filter?: Filter<VueloAzafata>,
  ): Promise<VueloAzafata[]> {
    return this.vueloAzafataRepository.find(filter);
  }

  @patch('/vuelo-azafatas', {
    responses: {
      '200': {
        description: 'VueloAzafata PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VueloAzafata, {partial: true}),
        },
      },
    })
    vueloAzafata: VueloAzafata,
    @param.query.object('where', getWhereSchemaFor(VueloAzafata)) where?: Where<VueloAzafata>,
  ): Promise<Count> {
    return this.vueloAzafataRepository.updateAll(vueloAzafata, where);
  }

  @get('/vuelo-azafatas/{id}', {
    responses: {
      '200': {
        description: 'VueloAzafata model instance',
        content: {'application/json': {schema: getModelSchemaRef(VueloAzafata)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<VueloAzafata> {
    return this.vueloAzafataRepository.findById(id);
  }

  @patch('/vuelo-azafatas/{id}', {
    responses: {
      '204': {
        description: 'VueloAzafata PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VueloAzafata, {partial: true}),
        },
      },
    })
    vueloAzafata: VueloAzafata,
  ): Promise<void> {
    await this.vueloAzafataRepository.updateById(id, vueloAzafata);
  }

  @put('/vuelo-azafatas/{id}', {
    responses: {
      '204': {
        description: 'VueloAzafata PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vueloAzafata: VueloAzafata,
  ): Promise<void> {
    await this.vueloAzafataRepository.replaceById(id, vueloAzafata);
  }

  @del('/vuelo-azafatas/{id}', {
    responses: {
      '204': {
        description: 'VueloAzafata DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vueloAzafataRepository.deleteById(id);
  }
}
