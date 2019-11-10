import {DefaultCrudRepository} from '@loopback/repository';
import {VueloPasajeroPromocion, VueloPasajeroPromocionRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VueloPasajeroPromocionRepository extends DefaultCrudRepository<
  VueloPasajeroPromocion,
  typeof VueloPasajeroPromocion.prototype.id,
  VueloPasajeroPromocionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(VueloPasajeroPromocion, dataSource);
  }
}
