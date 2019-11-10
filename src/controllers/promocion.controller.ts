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
import {Promocion} from '../models';
import {PromocionRepository} from '../repositories';

export class PromocionController {
  constructor(
    @repository(PromocionRepository)
    public promocionRepository : PromocionRepository,
  ) {}

  @post('/promocions', {
    responses: {
      '200': {
        description: 'Promocion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Promocion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promocion, {
            title: 'NewPromocion',
            exclude: ['id'],
          }),
        },
      },
    })
    promocion: Omit<Promocion, 'id'>,
  ): Promise<Promocion> {
    return this.promocionRepository.create(promocion);
  }

  @get('/promocions/count', {
    responses: {
      '200': {
        description: 'Promocion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Promocion)) where?: Where<Promocion>,
  ): Promise<Count> {
    return this.promocionRepository.count(where);
  }

  @get('/promocions', {
    responses: {
      '200': {
        description: 'Array of Promocion model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Promocion)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Promocion)) filter?: Filter<Promocion>,
  ): Promise<Promocion[]> {
    return this.promocionRepository.find(filter);
  }

  @patch('/promocions', {
    responses: {
      '200': {
        description: 'Promocion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promocion, {partial: true}),
        },
      },
    })
    promocion: Promocion,
    @param.query.object('where', getWhereSchemaFor(Promocion)) where?: Where<Promocion>,
  ): Promise<Count> {
    return this.promocionRepository.updateAll(promocion, where);
  }

  @get('/promocions/{id}', {
    responses: {
      '200': {
        description: 'Promocion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Promocion)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Promocion> {
    return this.promocionRepository.findById(id);
  }

  @patch('/promocions/{id}', {
    responses: {
      '204': {
        description: 'Promocion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promocion, {partial: true}),
        },
      },
    })
    promocion: Promocion,
  ): Promise<void> {
    await this.promocionRepository.updateById(id, promocion);
  }

  @put('/promocions/{id}', {
    responses: {
      '204': {
        description: 'Promocion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() promocion: Promocion,
  ): Promise<void> {
    await this.promocionRepository.replaceById(id, promocion);
  }

  @del('/promocions/{id}', {
    responses: {
      '204': {
        description: 'Promocion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.promocionRepository.deleteById(id);
  }
}
