import {DefaultCrudRepository} from '@loopback/repository';
import {VueloAzafata, VueloAzafataRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VueloAzafataRepository extends DefaultCrudRepository<
  VueloAzafata,
  typeof VueloAzafata.prototype.id,
  VueloAzafataRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(VueloAzafata, dataSource);
  }
}
