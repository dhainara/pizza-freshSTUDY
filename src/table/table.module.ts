//Os controladores são responsáveis por controlar as rotas, lidar com as solicitações recebidas (requests) e retornar as respostas (responses) ao cliente. Ele recebe o decorator @controller e nele estarão presentes os métodos HTTP (Get, Post, Put, Patch e Delete).

import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { TableController } from './table.controller'
import { TableService } from './table.service';

@Module({
  imports: [PrismaModule],
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}