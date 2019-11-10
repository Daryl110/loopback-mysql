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
import {Clase} from '../models';
import {ClaseRepository} from '../repositories';

export class ClaseController {
  constructor(
    @repository(ClaseRepository)
    public claseRepository : ClaseRepository,
  ) {}

  @post('/clases', {
    responses: {
      '200': {
        description: 'Clase model instance',
        content: {'application/json': {schema: getModelSchemaRef(Clase)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clase, {
            title: 'NewClase',
            exclude: ['id'],
          }),
        },
      },
    })
    clase: Omit<Clase, 'id'>,
  ): Promise<Clase> {
    return this.claseRepository.create(clase);
  }

  @get('/clases/count', {
    responses: {
      '200': {
        description: 'Clase model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Clase)) where?: Where<Clase>,
  ): Promise<Count> {
    return this.claseRepository.count(where);
  }

  @get('/clases', {
    responses: {
      '200': {
        description: 'Array of Clase model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Clase)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Clase)) filter?: Filter<Clase>,
  ): Promise<Clase[]> {
    return this.claseRepository.find(filter);
  }

  @patch('/clases', {
    responses: {
      '200': {
        description: 'Clase PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clase, {partial: true}),
        },
      },
    })
    clase: Clase,
    @param.query.object('where', getWhereSchemaFor(Clase)) where?: Where<Clase>,
  ): Promise<Count> {
    return this.claseRepository.updateAll(clase, where);
  }

  @get('/clases/{id}', {
    responses: {
      '200': {
        description: 'Clase model instance',
        content: {'application/json': {schema: getModelSchemaRef(Clase)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Clase> {
    return this.claseRepository.findById(id);
  }

  @patch('/clases/{id}', {
    responses: {
      '204': {
        description: 'Clase PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clase, {partial: true}),
        },
      },
    })
    clase: Clase,
  ): Promise<void> {
    await this.claseRepository.updateById(id, clase);
  }

  @put('/clases/{id}', {
    responses: {
      '204': {
        description: 'Clase PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() clase: Clase,
  ): Promise<void> {
    await this.claseRepository.replaceById(id, clase);
  }

  @del('/clases/{id}', {
    responses: {
      '204': {
        description: 'Clase DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.claseRepository.deleteById(id);
  }
}
