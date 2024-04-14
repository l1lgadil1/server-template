import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Name',
      brand: 'Brand',
      flavors: ['flavor1', 'flavor2'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find((i) => i.id === +id);
  }
  create(body: Coffee) {
    return this.coffees.push(body);
  }
}
