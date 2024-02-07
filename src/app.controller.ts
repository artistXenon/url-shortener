import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(): string {
    return 'nothing around here';
  }

  @Get(':id')
  getURL(@Param('id') id, @Res() res): string {
    const url = this.appService.getUrl(id);
    if (url === undefined) {
      return res.redirect('/');
    }
    return res.redirect(url);
  }

  @Post(':id')
  postURL(@Param('id') id, @Body() body): string {
    return this.appService.createUrl(id, body.url);
  }

  @Delete(':id')
  deleteURL(@Param('id') id): string {
    return this.appService.deleteUrl(id);
  }
}
