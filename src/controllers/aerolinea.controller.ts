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
import {Aerolinea} from '../models';
import {AerolineaRepository} from '../repositories';

export class AerolineaController {
  constructor(
    @repository(AerolineaRepository)
    public aerolineaRepository : AerolineaRepository,
  ) {}

  @post('/aerolineas', {
    responses: {
      '200': {
        description: 'Aerolinea model instance',
        content: {'application/json': {schema: getModelSchemaRef(Aerolinea)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aerolinea, {
            title: 'NewAerolinea',
            exclude: ['id'],
          }),
        },
      },
    })
    aerolinea: Omit<Aerolinea, 'id'>,
  ): Promise<Aerolinea> {
    return this.aerolineaRepository.create(aerolinea);
  }

  @get('/aerolineas/count', {
    responses: {
      '200': {
        description: 'Aerolinea model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Aerolinea)) where?: Where<Aerolinea>,
  ): Promise<Count> {
    return this.aerolineaRepository.count(where);
  }

  @get('/aerolineas', {
    responses: {
      '200': {
        description: 'Array of Aerolinea model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Aerolinea)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Aerolinea)) filter?: Filter<Aerolinea>,
  ): Promise<Aerolinea[]> {
    return this.aerolineaRepository.find(filter);
  }

  @patch('/aerolineas', {
    responses: {
      '200': {
        description: 'Aerolinea PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aerolinea, {partial: true}),
        },
      },
    })
    aerolinea: Aerolinea,
    @param.query.object('where', getWhereSchemaFor(Aerolinea)) where?: Where<Aerolinea>,
  ): Promise<Count> {
    return this.aerolineaRepository.updateAll(aerolinea, where);
  }

  @get('/aerolineas/{id}', {
    responses: {
      '200': {
        description: 'Aerolinea model instance',
        content: {'application/json': {schema: getModelSchemaRef(Aerolinea)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Aerolinea> {
    return this.aerolineaRepository.findById(id);
  }

  @patch('/aerolineas/{id}', {
    responses: {
      '204': {
        description: 'Aerolinea PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aerolinea, {partial: true}),
        },
      },
    })
    aerolinea: Aerolinea,
  ): Promise<void> {
    await this.aerolineaRepository.updateById(id, aerolinea);
  }

  @put('/aerolineas/{id}', {
    responses: {
      '204': {
        description: 'Aerolinea PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() aerolinea: Aerolinea,
  ): Promise<void> {
    await this.aerolineaRepository.replaceById(id, aerolinea);
  }

  @del('/aerolineas/{id}', {
    responses: {
      '204': {
        description: 'Aerolinea DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.aerolineaRepository.deleteById(id);
  }
}
