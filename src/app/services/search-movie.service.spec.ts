import { TestBed } from '@angular/core/testing';

import { SearchMovieService } from './search-movie.service';

describe('SearchMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchMovieService = TestBed.get(SearchMovieService);
    expect(service).toBeTruthy();
  });
});
