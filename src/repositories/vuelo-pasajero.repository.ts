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

  getReservas(): Promise<(VueloPasajero & VueloPasajeroRelations)[]> {
    return this.find({ where: {estado: 'RESERVA'}});
  }

  cancelarReserva(id: number) : Promise<boolean> {
    return this.findById(id).then(data => {
      if(data.estado === 'RESERVA'){
        data.estado = 'CANCELADO';
        this.updateById(data.id, data);
        return this.findById(data.id).then(
          data1 => data1.estado === 'CANCELADO'
        );
      }
      return false;
    });
  }
}
