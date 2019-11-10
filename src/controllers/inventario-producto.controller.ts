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
import {InventarioProducto} from '../models';
import {InventarioProductoRepository} from '../repositories';

export class InventarioProductoController {
  constructor(
    @repository(InventarioProductoRepository)
    public inventarioProductoRepository : InventarioProductoRepository,
  ) {}

  @post('/inventario-productos', {
    responses: {
      '200': {
        description: 'InventarioProducto model instance',
        content: {'application/json': {schema: getModelSchemaRef(InventarioProducto)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InventarioProducto, {
            title: 'NewInventarioProducto',
            exclude: ['id'],
          }),
        },
      },
    })
    inventarioProducto: Omit<InventarioProducto, 'id'>,
  ): Promise<InventarioProducto> {
    return this.inventarioProductoRepository.create(inventarioProducto);
  }

  @get('/inventario-productos/count', {
    responses: {
      '200': {
        description: 'InventarioProducto model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(InventarioProducto)) where?: Where<InventarioProducto>,
  ): Promise<Count> {
    return this.inventarioProductoRepository.count(where);
  }

  @get('/inventario-productos', {
    responses: {
      '200': {
        description: 'Array of InventarioProducto model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(InventarioProducto)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(InventarioProducto)) filter?: Filter<InventarioProducto>,
  ): Promise<InventarioProducto[]> {
    return this.inventarioProductoRepository.find(filter);
  }

  @patch('/inventario-productos', {
    responses: {
      '200': {
        description: 'InventarioProducto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InventarioProducto, {partial: true}),
        },
      },
    })
    inventarioProducto: InventarioProducto,
    @param.query.object('where', getWhereSchemaFor(InventarioProducto)) where?: Where<InventarioProducto>,
  ): Promise<Count> {
    return this.inventarioProductoRepository.updateAll(inventarioProducto, where);
  }

  @get('/inventario-productos/{id}', {
    responses: {
      '200': {
        description: 'InventarioProducto model instance',
        content: {'application/json': {schema: getModelSchemaRef(InventarioProducto)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<InventarioProducto> {
    return this.inventarioProductoRepository.findById(id);
  }

  @patch('/inventario-productos/{id}', {
    responses: {
      '204': {
        description: 'InventarioProducto PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InventarioProducto, {partial: true}),
        },
      },
    })
    inventarioProducto: InventarioProducto,
  ): Promise<void> {
    await this.inventarioProductoRepository.updateById(id, inventarioProducto);
  }

  @put('/inventario-productos/{id}', {
    responses: {
      '204': {
        description: 'InventarioProducto PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() inventarioProducto: InventarioProducto,
  ): Promise<void> {
    await this.inventarioProductoRepository.replaceById(id, inventarioProducto);
  }

  @del('/inventario-productos/{id}', {
    responses: {
      '204': {
        description: 'InventarioProducto DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.inventarioProductoRepository.deleteById(id);
  }
}
