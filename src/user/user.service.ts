import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  public constructor(private readonly prismaService: PrismaService) {}
  public async findById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id
      },
      include: {
        accounts: true
      }
    });
    if(!user) throw new NotFoundException('User not found');
    return user;
  }
}
