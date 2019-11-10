import {DefaultCrudRepository} from '@loopback/repository';
import {Aerolinea, AerolineaRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AerolineaRepository extends DefaultCrudRepository<
  Aerolinea,
  typeof Aerolinea.prototype.id,
  AerolineaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Aerolinea, dataSource);
  }
}
