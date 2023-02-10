import { IsEmail, IsNotEmpty } from 'class-validator';
import { IsEqualTo } from 'src/utils/constraints/IsEqualTo';

export class CreateUser {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEqualTo('password')
  confirmPassword: string;
}
