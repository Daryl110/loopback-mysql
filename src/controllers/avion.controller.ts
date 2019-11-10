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
import {Avion} from '../models';
import {AvionRepository} from '../repositories';

export class AvionController {
  constructor(
    @repository(AvionRepository)
    public avionRepository : AvionRepository,
  ) {}

  @post('/avions', {
    responses: {
      '200': {
        description: 'Avion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Avion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Avion, {
            title: 'NewAvion',
            exclude: ['id'],
          }),
        },
      },
    })
    avion: Omit<Avion, 'id'>,
  ): Promise<Avion> {
    return this.avionRepository.create(avion);
  }

  @get('/avions/count', {
    responses: {
      '200': {
        description: 'Avion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Avion)) where?: Where<Avion>,
  ): Promise<Count> {
    return this.avionRepository.count(where);
  }

  @get('/avions', {
    responses: {
      '200': {
        description: 'Array of Avion model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Avion)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Avion)) filter?: Filter<Avion>,
  ): Promise<Avion[]> {
    return this.avionRepository.find(filter);
  }

  @patch('/avions', {
    responses: {
      '200': {
        description: 'Avion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Avion, {partial: true}),
        },
      },
    })
    avion: Avion,
    @param.query.object('where', getWhereSchemaFor(Avion)) where?: Where<Avion>,
  ): Promise<Count> {
    return this.avionRepository.updateAll(avion, where);
  }

  @get('/avions/{id}', {
    responses: {
      '200': {
        description: 'Avion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Avion)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Avion> {
    return this.avionRepository.findById(id);
  }

  @patch('/avions/{id}', {
    responses: {
      '204': {
        description: 'Avion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Avion, {partial: true}),
        },
      },
    })
    avion: Avion,
  ): Promise<void> {
    await this.avionRepository.updateById(id, avion);
  }

  @put('/avions/{id}', {
    responses: {
      '204': {
        description: 'Avion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() avion: Avion,
  ): Promise<void> {
    await this.avionRepository.replaceById(id, avion);
  }

  @del('/avions/{id}', {
    responses: {
      '204': {
        description: 'Avion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.avionRepository.deleteById(id);
  }
}
