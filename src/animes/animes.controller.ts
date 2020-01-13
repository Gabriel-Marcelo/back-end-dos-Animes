import { AnimeSevice } from './shared/anime.sevice';
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { Anime } from './shared/anime';

@Controller('animes')
export class AnimesController {

    constructor(private animeService: AnimeSevice) {}

    @Post()
    async create(@Body() anime: Anime): Promise<Anime> {
        return this.animeService.create(anime);
    }

    @Get()
    async getAll(): Promise<Anime[]> {
        return this.animeService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Anime> {
        return this.animeService.getById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() anime: Anime): Promise<Anime> {
        return this.animeService.update(id, anime);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.animeService.delete(id);
    }

}
