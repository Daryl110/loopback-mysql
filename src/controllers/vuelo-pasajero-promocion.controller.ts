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
import {VueloPasajeroPromocion} from '../models';
import {VueloPasajeroPromocionRepository} from '../repositories';

export class VueloPasajeroPromocionController {
  constructor(
    @repository(VueloPasajeroPromocionRepository)
    public vueloPasajeroPromocionRepository : VueloPasajeroPromocionRepository,
  ) {}

  @post('/vuelo-pasajero-promocions', {
    responses: {
      '200': {
        description: 'VueloPasajeroPromocion model instance',
        content: {'application/json': {schema: getModelSchemaRef(VueloPasajeroPromocion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VueloPasajeroPromocion, {
            title: 'NewVueloPasajeroPromocion',
            exclude: ['id'],
          }),
        },
      },
    })
    vueloPasajeroPromocion: Omit<VueloPasajeroPromocion, 'id'>,
  ): Promise<VueloPasajeroPromocion> {
    return this.vueloPasajeroPromocionRepository.create(vueloPasajeroPromocion);
  }

  @get('/vuelo-pasajero-promocions/count', {
    responses: {
      '200': {
        description: 'VueloPasajeroPromocion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(VueloPasajeroPromocion)) where?: Where<VueloPasajeroPromocion>,
  ): Promise<Count> {
    return this.vueloPasajeroPromocionRepository.count(where);
  }

  @get('/vuelo-pasajero-promocions', {
    responses: {
      '200': {
        description: 'Array of VueloPasajeroPromocion model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(VueloPasajeroPromocion)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(VueloPasajeroPromocion)) filter?: Filter<VueloPasajeroPromocion>,
  ): Promise<VueloPasajeroPromocion[]> {
    return this.vueloPasajeroPromocionRepository.find(filter);
  }

  @patch('/vuelo-pasajero-promocions', {
    responses: {
      '200': {
        description: 'VueloPasajeroPromocion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VueloPasajeroPromocion, {partial: true}),
        },
      },
    })
    vueloPasajeroPromocion: VueloPasajeroPromocion,
    @param.query.object('where', getWhereSchemaFor(VueloPasajeroPromocion)) where?: Where<VueloPasajeroPromocion>,
  ): Promise<Count> {
    return this.vueloPasajeroPromocionRepository.updateAll(vueloPasajeroPromocion, where);
  }

  @get('/vuelo-pasajero-promocions/{id}', {
    responses: {
      '200': {
        description: 'VueloPasajeroPromocion model instance',
        content: {'application/json': {schema: getModelSchemaRef(VueloPasajeroPromocion)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<VueloPasajeroPromocion> {
    return this.vueloPasajeroPromocionRepository.findById(id);
  }

  @patch('/vuelo-pasajero-promocions/{id}', {
    responses: {
      '204': {
        description: 'VueloPasajeroPromocion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VueloPasajeroPromocion, {partial: true}),
        },
      },
    })
    vueloPasajeroPromocion: VueloPasajeroPromocion,
  ): Promise<void> {
    await this.vueloPasajeroPromocionRepository.updateById(id, vueloPasajeroPromocion);
  }

  @put('/vuelo-pasajero-promocions/{id}', {
    responses: {
      '204': {
        description: 'VueloPasajeroPromocion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vueloPasajeroPromocion: VueloPasajeroPromocion,
  ): Promise<void> {
    await this.vueloPasajeroPromocionRepository.replaceById(id, vueloPasajeroPromocion);
  }

  @del('/vuelo-pasajero-promocions/{id}', {
    responses: {
      '204': {
        description: 'VueloPasajeroPromocion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vueloPasajeroPromocionRepository.deleteById(id);
  }
}
