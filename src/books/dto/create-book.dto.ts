import { IsInt, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  author: string;

  @IsString()
  title: string;

  @IsInt()
  year: number;
}
