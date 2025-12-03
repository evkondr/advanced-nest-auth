import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from '@/user/user.service';
import { AuthMethod } from 'generated/prisma/enums';

@Injectable()
export class AuthService {
  constructor(private readonly userService:UserService){}
  public async register(dto:RegisterDto): Promise<any> {
    const isExist = await this.userService.findByEmail(dto.email);
    if(isExist) {
      throw new ConflictException('Пользователь с таким email уже существует');
    }
    const user = await this.userService.create(
      dto.email,
      dto.password,
      dto.name, 
      '', 
      AuthMethod.CREDENTIALS, 
      false
    );
    return user;
  }

  public async login(user: any): Promise<any> {}

  public async logout(user: any): Promise<any> {}

  private async saveSession(user: any): Promise<any> {}
}
