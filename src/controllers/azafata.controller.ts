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
import {Azafata} from '../models';
import {AzafataRepository} from '../repositories';

export class AzafataController {
  constructor(
    @repository(AzafataRepository)
    public azafataRepository : AzafataRepository,
  ) {}

  @post('/azafatas', {
    responses: {
      '200': {
        description: 'Azafata model instance',
        content: {'application/json': {schema: getModelSchemaRef(Azafata)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Azafata, {
            title: 'NewAzafata',
          }),
        },
      },
    })
    azafata: Omit<Azafata, 'id'>,
  ): Promise<Azafata> {
    return this.azafataRepository.create(azafata);
  }

  @get('/azafatas/count', {
    responses: {
      '200': {
        description: 'Azafata model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Azafata)) where?: Where<Azafata>,
  ): Promise<Count> {
    return this.azafataRepository.count(where);
  }

  @get('/azafatas', {
    responses: {
      '200': {
        description: 'Array of Azafata model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Azafata)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Azafata)) filter?: Filter<Azafata>,
  ): Promise<Azafata[]> {
    return this.azafataRepository.find(filter);
  }

  @patch('/azafatas', {
    responses: {
      '200': {
        description: 'Azafata PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Azafata, {partial: true}),
        },
      },
    })
    azafata: Azafata,
    @param.query.object('where', getWhereSchemaFor(Azafata)) where?: Where<Azafata>,
  ): Promise<Count> {
    return this.azafataRepository.updateAll(azafata, where);
  }

  @get('/azafatas/{id}', {
    responses: {
      '200': {
        description: 'Azafata model instance',
        content: {'application/json': {schema: getModelSchemaRef(Azafata)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Azafata> {
    return this.azafataRepository.findById(id);
  }

  @patch('/azafatas/{id}', {
    responses: {
      '204': {
        description: 'Azafata PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Azafata, {partial: true}),
        },
      },
    })
    azafata: Azafata,
  ): Promise<void> {
    await this.azafataRepository.updateById(id, azafata);
  }

  @put('/azafatas/{id}', {
    responses: {
      '204': {
        description: 'Azafata PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() azafata: Azafata,
  ): Promise<void> {
    await this.azafataRepository.replaceById(id, azafata);
  }

  @del('/azafatas/{id}', {
    responses: {
      '204': {
        description: 'Azafata DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.azafataRepository.deleteById(id);
  }
}
