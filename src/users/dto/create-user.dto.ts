import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUsersDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  nickname: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNumber()
  reportCount: number;
}