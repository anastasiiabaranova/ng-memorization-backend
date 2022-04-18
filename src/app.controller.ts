import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CardEntity } from './card.entity';

@Controller()
export class AppController {
  constructor(private dbService: InMemoryDBService<any>) {
  }

  @Get()
  getAll(): CardEntity[] {
    return this.dbService.getAll();
  }

  @Post()
  create(@Body() card: Partial<CardEntity>): CardEntity {
    return this.dbService.create(card);
  }

  @Post('seed')
  seed(): CardEntity[] {
    this.dbService.seed((idx: number) => ({
      id: String(idx + 1),
      name: `Name-${idx + 1}`,
      description: `Name-${idx + 1} description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
    }), 5);

    return this.dbService.getAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    return this.dbService.delete(id);
  }
}
