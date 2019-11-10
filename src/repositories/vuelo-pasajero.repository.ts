import {DefaultCrudRepository} from '@loopback/repository';
import {VueloPasajero, VueloPasajeroRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VueloPasajeroRepository extends DefaultCrudRepository<
  VueloPasajero,
  typeof VueloPasajero.prototype.id,
  VueloPasajeroRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(VueloPasajero, dataSource);
  }
}
