import { TestBed } from '@angular/core/testing';

import { JokeService } from './joke.service';

describe('JokeService', () => {
  let service: JokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
