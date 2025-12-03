import { IsPasswordMatching } from "@/libs/decorators/is-pasword-matching.decorator";
import { IsEmail, IsNotEmpty, IsString, MinLength, Validate } from "class-validator";

export class RegisterDto {
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя не должно быть пустым' })
  name!: string;

  @IsString({ message: 'Email должен быть строкой' })
  @IsNotEmpty({ message: 'Email не должно быть пустым' })
  @IsEmail({}, { message: 'Неправильный формат email' })
  email!: string;

  @IsString({ message: 'Пароль должен быть строкой' })
  @IsNotEmpty({ message: 'Пароль не должно быть пустым' })
  @MinLength(6, { message: 'Пароль должен содержать минимум 6 символов'})
  password!: string;

  @IsString({ message: 'Пароль должен быть строкой' })
  @IsNotEmpty({ message: 'Пароль не должно быть пустым' })
  @MinLength(6, { message: 'Пароль должен содержать минимум 6 символов'})
  @Validate(IsPasswordMatching,  { message: 'Пароль должен содержать минимум 6 символов' })
  passwordRepeat!: string;
}