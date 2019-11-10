import {DefaultCrudRepository} from '@loopback/repository';
import {Avion, AvionRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AvionRepository extends DefaultCrudRepository<
  Avion,
  typeof Avion.prototype.id,
  AvionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Avion, dataSource);
  }
}
