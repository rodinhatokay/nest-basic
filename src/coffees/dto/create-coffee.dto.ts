import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'the brand of the coffee' })
  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
