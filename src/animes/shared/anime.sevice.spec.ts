import { Test, TestingModule } from '@nestjs/testing';
import { AnimeSevice } from './anime.sevice';

describe('AnimeSevice', () => {
  let provider: AnimeSevice;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimeSevice],
    }).compile();

    provider = module.get<AnimeSevice>(AnimeSevice);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
