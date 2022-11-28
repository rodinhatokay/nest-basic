import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../events/entities/event.entity';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { COFFEE_BRANDS } from './coffees.constants';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
// import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      useValue: ['buddy brew', 'nescafe'],
      // useFactory: () => ['buddy brew', 'nescafe'],
      //   { second example
      //     provide: 'COFFEE_BRANDS',
      //     // Note "async" here, and Promise/Async event inside the Factory function
      //     // Could be a database connection / API call / etc
      //     // In our case we're just "mocking" this type of event with a Promise
      //     useFactory: async (dataSource: DataSource): Promise<string[]> => {
      //       // const coffeeBrands = await connection.query('SELECT * ...');
      //       const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe'])
      //       return coffeeBrands;
      //     },
      //     inject: [DataSource],
      //   },
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
