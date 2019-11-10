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
import {Ruta} from '../models';
import {RutaRepository} from '../repositories';

export class RutaController {
  constructor(
    @repository(RutaRepository)
    public rutaRepository : RutaRepository,
  ) {}

  @post('/rutas', {
    responses: {
      '200': {
        description: 'Ruta model instance',
        content: {'application/json': {schema: getModelSchemaRef(Ruta)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ruta, {
            title: 'NewRuta',
            exclude: ['id'],
          }),
        },
      },
    })
    ruta: Omit<Ruta, 'id'>,
  ): Promise<Ruta> {
    return this.rutaRepository.create(ruta);
  }

  @get('/rutas/count', {
    responses: {
      '200': {
        description: 'Ruta model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Ruta)) where?: Where<Ruta>,
  ): Promise<Count> {
    return this.rutaRepository.count(where);
  }

  @get('/rutas', {
    responses: {
      '200': {
        description: 'Array of Ruta model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ruta)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Ruta)) filter?: Filter<Ruta>,
  ): Promise<Ruta[]> {
    return this.rutaRepository.find(filter);
  }

  @patch('/rutas', {
    responses: {
      '200': {
        description: 'Ruta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ruta, {partial: true}),
        },
      },
    })
    ruta: Ruta,
    @param.query.object('where', getWhereSchemaFor(Ruta)) where?: Where<Ruta>,
  ): Promise<Count> {
    return this.rutaRepository.updateAll(ruta, where);
  }

  @get('/rutas/{id}', {
    responses: {
      '200': {
        description: 'Ruta model instance',
        content: {'application/json': {schema: getModelSchemaRef(Ruta)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Ruta> {
    return this.rutaRepository.findById(id);
  }

  @patch('/rutas/{id}', {
    responses: {
      '204': {
        description: 'Ruta PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ruta, {partial: true}),
        },
      },
    })
    ruta: Ruta,
  ): Promise<void> {
    await this.rutaRepository.updateById(id, ruta);
  }

  @put('/rutas/{id}', {
    responses: {
      '204': {
        description: 'Ruta PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ruta: Ruta,
  ): Promise<void> {
    await this.rutaRepository.replaceById(id, ruta);
  }

  @del('/rutas/{id}', {
    responses: {
      '204': {
        description: 'Ruta DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.rutaRepository.deleteById(id);
  }
}
