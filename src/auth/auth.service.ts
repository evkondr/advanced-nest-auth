import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public async register(dto): Promise<any> {}

  public async login(user: any): Promise<any> {}

  public async logout(user: any): Promise<any> {}

  private async saveSession(user: any): Promise<any> {}
}
