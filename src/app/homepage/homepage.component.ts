import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../services/api.service';
import { SearchMovieService } from '../services/search-movie.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  users: any;
  movies: any;
  isFound: any;
  searchedText: any = '';

  constructor(private httpClient: HttpClient, private searchMovieService: SearchMovieService, private spinner: NgxSpinnerService, private searchedMovieService: SearchMovieService, private apiService: ApiService) {
    this.spinner.show();
    this.getUpcomingMovies();
  }

  ngOnInit() {
    this.searchedMovieService.$isMovieSearched.subscribe((searchText) => {
      if (searchText.trim()) {
        this.searchedText = searchText;
        console.log('DATA TO BE SEARCHED',this.searchedText);
        this.apiService.searchMovie(searchText).subscribe(
          res => this.searchTextSuccess(res),
          error => this.searchTextErrors(error)
        )
      } else {
        this.searchedText = searchText;
        this.getUpcomingMovies();
      }
    });
  }

  searchTextSuccess(data) {
    if (data && data.results) {
      this.movies = data.results;
    }
  }

  searchTextErrors(error) {
    console.log(error);
  }

  getUpcomingMovies() {
    this.apiService.getUpcomingMovies().subscribe(
      res => this.getUpcomingMoviesSuccess(res),
      error => this.getUpcomingMoviesErrors(error)
    )
  }

  getUpcomingMoviesSuccess(data) {
    if (data && data.results)
      this.movies = data.results;
    this.spinner.hide();
  }

  getUpcomingMoviesErrors(error) {
    this.spinner.hide();
  }
}
