import { IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  public brand: string;

  @IsNotEmpty()
  private model: string;

  @IsNotEmpty()
  private category: string;

  @IsNotEmpty()
  private price: number;

  @IsNotEmpty()
  private year: number;

  @IsNotEmpty()
  private mileage: number;
}
