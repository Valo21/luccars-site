import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.vehicleRepository.save(createVehicleDto);
  }

  findAll() {
    return this.vehicleRepository.find();
  }

  findOne(id: string) {
    return this.vehicleRepository.findOne({ where: { id } });
  }

  update(id: string, updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleRepository.update({ id }, updateVehicleDto);
  }

  remove(id: string) {
    return this.vehicleRepository.delete({ id });
  }
}
