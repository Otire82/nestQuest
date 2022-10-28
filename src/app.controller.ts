import { Controller, Get } from '@nestjs/common';
// import { User } from './entities/user.model';
import { AppService } from './app.service';
// import { FilterService } from './filter/filter.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}
  // constructor(private readonly filterService: FilterService) {}

  // @Post()
  // getHello(@Body() body: User[], @Query('name') name: string): User[] {
  //   return this.filterService.filterUsers(body, name);
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
