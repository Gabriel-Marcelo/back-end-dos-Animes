import * as mongoose from 'mongoose';

export const AnimeSchema = new mongoose.Schema({
    animePreferido: String,
    personagemPreferido: String,
})