import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'generated/prisma/client';



@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit,  OnModuleDestroy{
  constructor() {
    console.log(process.env.PG_URI)
    const adapter = new PrismaPg({ connectionString: process.env.PG_URI })
    super({ adapter });
  }
  public async onModuleInit() {
    try {
      await this.$connect();
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  }
  public async onModuleDestroy() {
    try {
      await this.$disconnect();
    } catch (error) {
      console.error('Error disconnecting from the database:', error);
    }
  }
}
