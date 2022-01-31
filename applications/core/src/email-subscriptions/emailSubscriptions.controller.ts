import {
  Body,
  Controller,
  Get,
  Post,
  Inject,
} from '@nestjs/common';
import CreateSubscriberDto from './dto/createSubscriber.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('email-subscriptions')
export default class EmailSubscriptionsController {
  constructor(
    @Inject('SUBSCRIBERS_SERVICE') private subscribersService: ClientProxy,
  ) {}

  @Get()
  async getSubscribers() {
    return this.subscribersService.send({
      cmd: 'get-all-subscribers'
    }, '')
  }

  @Post()
  async createPost(@Body() subscriber: CreateSubscriberDto) {
    return this.subscribersService.send({
      cmd: 'add-subscriber'
    }, subscriber)
  }
}
