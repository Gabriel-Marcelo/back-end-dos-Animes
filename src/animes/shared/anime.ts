import { Document } from 'mongoose';

export class Anime extends Document {
    animePreferido: string;
    personagemPreferido: string;
}
