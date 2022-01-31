import { Module } from '@nestjs/common';
import {EmailSubscriptionsModule} from "./email-subscriptions/emailSubscriptions.module";
import {ConfigModule} from "@nestjs/config";
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    EmailSubscriptionsModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        SUBSCRIBERS_SERVICE_HOST: Joi.string().required(),
        SUBSCRIBERS_SERVICE_PORT: Joi.number().required(),
        PORT: Joi.number(),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
