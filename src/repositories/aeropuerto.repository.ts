import {DefaultCrudRepository} from '@loopback/repository';
import {Aeropuerto, AeropuertoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AeropuertoRepository extends DefaultCrudRepository<
  Aeropuerto,
  typeof Aeropuerto.prototype.id,
  AeropuertoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Aeropuerto, dataSource);
  }
}
