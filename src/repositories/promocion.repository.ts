import {DefaultCrudRepository} from '@loopback/repository';
import {Promocion, PromocionRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PromocionRepository extends DefaultCrudRepository<
  Promocion,
  typeof Promocion.prototype.id,
  PromocionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Promocion, dataSource);
  }
}
