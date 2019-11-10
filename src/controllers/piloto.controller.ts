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
import {Piloto} from '../models';
import {PilotoRepository} from '../repositories';

export class PilotoController {
  constructor(
    @repository(PilotoRepository)
    public pilotoRepository : PilotoRepository,
  ) {}

  @post('/pilotos', {
    responses: {
      '200': {
        description: 'Piloto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Piloto)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Piloto, {
            title: 'NewPiloto',
            exclude: ['id'],
          }),
        },
      },
    })
    piloto: Omit<Piloto, 'id'>,
  ): Promise<Piloto> {
    return this.pilotoRepository.create(piloto);
  }

  @get('/pilotos/count', {
    responses: {
      '200': {
        description: 'Piloto model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Piloto)) where?: Where<Piloto>,
  ): Promise<Count> {
    return this.pilotoRepository.count(where);
  }

  @get('/pilotos', {
    responses: {
      '200': {
        description: 'Array of Piloto model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Piloto)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Piloto)) filter?: Filter<Piloto>,
  ): Promise<Piloto[]> {
    return this.pilotoRepository.find(filter);
  }

  @patch('/pilotos', {
    responses: {
      '200': {
        description: 'Piloto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Piloto, {partial: true}),
        },
      },
    })
    piloto: Piloto,
    @param.query.object('where', getWhereSchemaFor(Piloto)) where?: Where<Piloto>,
  ): Promise<Count> {
    return this.pilotoRepository.updateAll(piloto, where);
  }

  @get('/pilotos/{id}', {
    responses: {
      '200': {
        description: 'Piloto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Piloto)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Piloto> {
    return this.pilotoRepository.findById(id);
  }

  @patch('/pilotos/{id}', {
    responses: {
      '204': {
        description: 'Piloto PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Piloto, {partial: true}),
        },
      },
    })
    piloto: Piloto,
  ): Promise<void> {
    await this.pilotoRepository.updateById(id, piloto);
  }

  @put('/pilotos/{id}', {
    responses: {
      '204': {
        description: 'Piloto PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() piloto: Piloto,
  ): Promise<void> {
    await this.pilotoRepository.replaceById(id, piloto);
  }

  @del('/pilotos/{id}', {
    responses: {
      '204': {
        description: 'Piloto DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pilotoRepository.deleteById(id);
  }
}
