import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@mail.ru',
  })
  email: string;

  @ApiProperty({
    default: 'Фамилия',
  })
  fullName: string;

  @ApiProperty({
    default: 'Пароль',
  })
  password: string;
}
