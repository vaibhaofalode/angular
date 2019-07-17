import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {
  $isMovieSearched = new EventEmitter();
  constructor() { }

  movieSearched(data) {
    this.$isMovieSearched.emit(data);
  }
}
