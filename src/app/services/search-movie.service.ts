import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {
  $isMovieSearched = new EventEmitter();
  $isSearchingMovie = new EventEmitter();

  constructor() { }

  movieSearched(data) {
    this.$isMovieSearched.emit(data);
  }
  movieSearchedDone() {
    this.$isSearchingMovie.emit(false);
  }
}
