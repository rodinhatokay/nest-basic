/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { CoffeeRefactor1668456694901 } from './src/migrations/1668456694901-CoffeeRefactor';
import { SchemaSync1668457058068 } from './src/migrations/1668457058068-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1668456694901, SchemaSync1668457058068],
});
