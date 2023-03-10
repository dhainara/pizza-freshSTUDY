import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger/dist';
import { AppService } from './app.service';

@ApiTags()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }
}