import { Test, TestingModule } from '@nestjs/testing';
import { AuthclearService } from './authclear.service';

describe('AuthclearService', () => {
  let service: AuthclearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthclearService],
    }).compile();

    service = module.get<AuthclearService>(AuthclearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
