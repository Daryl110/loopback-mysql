import {DefaultCrudRepository} from '@loopback/repository';
import {Azafata, AzafataRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AzafataRepository extends DefaultCrudRepository<
  Azafata,
  typeof Azafata.prototype.id,
  AzafataRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Azafata, dataSource);
  }
}
