import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [InMemoryDBModule.forRoot({})],
  controllers: [AppController],
})
export class AppModule {}
