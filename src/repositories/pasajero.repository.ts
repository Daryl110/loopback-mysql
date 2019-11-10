import {DefaultCrudRepository} from '@loopback/repository';
import {Pasajero, PasajeroRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PasajeroRepository extends DefaultCrudRepository<
  Pasajero,
  typeof Pasajero.prototype.id,
  PasajeroRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Pasajero, dataSource);
  }
}
