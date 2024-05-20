import { IsInt, IsString } from 'class-validator';

export class UpdateBookDto {
  @IsString()
  author: string;

  @IsString()
  title: string;

  @IsInt()
  year: number;
}
