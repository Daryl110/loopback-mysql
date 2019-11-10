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
import {Vendedor} from '../models';
import {VendedorRepository} from '../repositories';

export class VendedorController {
  constructor(
    @repository(VendedorRepository)
    public vendedorRepository : VendedorRepository,
  ) {}

  @post('/vendedors', {
    responses: {
      '200': {
        description: 'Vendedor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vendedor)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vendedor, {
            title: 'NewVendedor',
          }),
        },
      },
    })
    vendedor: Omit<Vendedor, 'id'>,
  ): Promise<Vendedor> {
    return this.vendedorRepository.create(vendedor);
  }

  @get('/vendedors/count', {
    responses: {
      '200': {
        description: 'Vendedor model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Vendedor)) where?: Where<Vendedor>,
  ): Promise<Count> {
    return this.vendedorRepository.count(where);
  }

  @get('/vendedors', {
    responses: {
      '200': {
        description: 'Array of Vendedor model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Vendedor)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Vendedor)) filter?: Filter<Vendedor>,
  ): Promise<Vendedor[]> {
    return this.vendedorRepository.find(filter);
  }

  @patch('/vendedors', {
    responses: {
      '200': {
        description: 'Vendedor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vendedor, {partial: true}),
        },
      },
    })
    vendedor: Vendedor,
    @param.query.object('where', getWhereSchemaFor(Vendedor)) where?: Where<Vendedor>,
  ): Promise<Count> {
    return this.vendedorRepository.updateAll(vendedor, where);
  }

  @get('/vendedors/{id}', {
    responses: {
      '200': {
        description: 'Vendedor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vendedor)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Vendedor> {
    return this.vendedorRepository.findById(id);
  }

  @patch('/vendedors/{id}', {
    responses: {
      '204': {
        description: 'Vendedor PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vendedor, {partial: true}),
        },
      },
    })
    vendedor: Vendedor,
  ): Promise<void> {
    await this.vendedorRepository.updateById(id, vendedor);
  }

  @put('/vendedors/{id}', {
    responses: {
      '204': {
        description: 'Vendedor PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vendedor: Vendedor,
  ): Promise<void> {
    await this.vendedorRepository.replaceById(id, vendedor);
  }

  @del('/vendedors/{id}', {
    responses: {
      '204': {
        description: 'Vendedor DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vendedorRepository.deleteById(id);
  }
}
