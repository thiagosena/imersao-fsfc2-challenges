import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route, RouteDocument } from './entities/route.entity';

@Injectable()
export class RoutesService {
  constructor(
    //@InjectModel(Route.name) private routeModel: Model<RouteDocument>,
  ) {}

  create(createRouteDto: CreateRouteDto) {
    return 'This action adds a new route';
  }

  findAll(): Route[] {
    //return this.routeModel.find().exec();
    return [
      new Route(
        '1',
        'Primeiro',
        { lat: -15.82594, lng: -47.92923 },
        { lat: -15.82942, lng: -47.92765 },
      ),
      new Route(
        '2',
        'Segundo',
        { lat: -15.82449, lng: -47.92756 },
        { lat: -15.8276, lng: -47.92621 },
      ),
      new Route(
        '3',
        'Terceiro',
        { lat: -15.82331, lng: -47.92588 },
        { lat: -15.82758, lng: -47.92532 },
      ),
      new Route(
        '4',
        'Quarto',
        { lat: -8.0362212, lng: -34.9054134 },
        { lat: -8.0413461, lng: -34.9085842 },
      ),
      new Route(
        '5',
        'Quinto',
        { lat: -5.8055477, lng: -35.204612 },
        { lat: -5.8367188, lng: -35.2041361 },
      ),
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
