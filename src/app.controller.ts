import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get()
  getprueba(): string {
    return 'pruebas numeor dos desde otra compu';
  }

  @Get()
  github(): string {
    return 'pruebas para comprobar el git';
  }
}
