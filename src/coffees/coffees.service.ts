import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

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
    const coffee = this.coffees.find((i) => i.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee with id ${id} not found`);
    }
    return coffee;
  }
  update(id: string, body: UpdateCoffeeDto) {
    const coffee = this.coffees.find((i) => i.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee with id ${id} not found`);
    }
    return this.coffees.splice(
      this.coffees.findIndex((i) => i.id === +id),
      1,
      { ...coffee, ...body },
    );
  }
  create(body: CreateCoffeeDto) {
    const index = this.coffees.length;
    this.coffees.push({ ...body, id: index });
    return body;
  }
}
