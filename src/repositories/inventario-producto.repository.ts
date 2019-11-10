import {DefaultCrudRepository} from '@loopback/repository';
import {InventarioProducto, InventarioProductoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InventarioProductoRepository extends DefaultCrudRepository<
  InventarioProducto,
  typeof InventarioProducto.prototype.id,
  InventarioProductoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(InventarioProducto, dataSource);
  }
}
