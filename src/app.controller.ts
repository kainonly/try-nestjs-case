import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async index() {
    return {
      msg: 'hello',
    };
  }
}
