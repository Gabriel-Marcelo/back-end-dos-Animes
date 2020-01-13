import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Anime } from './anime';

@Injectable()
export class AnimeSevice {

    constructor(@InjectModel('Anime') private readonly animeModel: Model<Anime>) {}

    async create(anime: Anime) {
        const createdAnime = new this.animeModel(anime);
        return await createdAnime.save();
    }

    async getAll() {
        return await this.animeModel.find().exec();
    }

    async getById(id: string) {
        return await this.animeModel.findById(id).exec();
    }

    async update(id: string, anime: Anime) {
        await this.animeModel.updateOne({_id: id}, anime).exec();
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.animeModel.deleteOne({_id: id}).exec();
    }

}
