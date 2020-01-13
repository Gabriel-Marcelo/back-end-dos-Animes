import { AnimeSchema } from './schemas/anime.schema';
import { Module } from '@nestjs/common';
import { AnimesController } from './animes.controller';
import { AnimeSevice } from './shared/anime.sevice';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Anime', schema: AnimeSchema }])
  ],
  controllers: [AnimesController],
  providers: [AnimeSevice],
})
export class AnimesModule {}
