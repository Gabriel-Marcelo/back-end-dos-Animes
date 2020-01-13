import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimesModule } from './animes/animes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://animedb:animedb@cluster0-rgler.gcp.mongodb.net/test?retryWrites=true&w=majority'),
    AnimesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
