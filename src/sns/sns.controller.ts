import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { SnsService } from './sns.service';
import { CreateSnDto } from './dto/create-sn.dto';
import { UrlRestrictionsGuard } from 'src/guards/url-restrictions/url-restrictions.guard';

@Controller('sns')
@UseGuards(UrlRestrictionsGuard)
export class SnsController {
  constructor(private readonly snsService: SnsService) {}

  @Post()
  publish(@Body() createSnDto: CreateSnDto) {
    return this.snsService.publish(createSnDto.subject, createSnDto.message);
  }
}
