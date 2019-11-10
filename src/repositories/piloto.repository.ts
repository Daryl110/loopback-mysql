import {DefaultCrudRepository} from '@loopback/repository';
import {Piloto, PilotoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PilotoRepository extends DefaultCrudRepository<
  Piloto,
  typeof Piloto.prototype.id,
  PilotoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Piloto, dataSource);
  }
}
