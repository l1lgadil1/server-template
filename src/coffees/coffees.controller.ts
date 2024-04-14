import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  findAll() {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return this.coffeesService.create(body);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() body) {
  //   return `This actions updates id ${id} to ${body}`;
  // }
  //
  // @Delete(':id')
  // delete(@Param('id') id: string) {
  //   return `This action deletes element with id ${id}`;
  // }
}
