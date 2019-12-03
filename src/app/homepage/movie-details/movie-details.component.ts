import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ApiService} from 'src/app/services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId: any;
  videos: any;
  movieDetails: any;
  similarMovies: any;


  constructor(private routes: ActivatedRoute,
              private httpClient: HttpClient,
              private spinner: NgxSpinnerService,
              public sanitizer: DomSanitizer,
              private apiService: ApiService) {
    this.routes.params.subscribe(params => {
      this.spinner.show();
      window.scrollTo(0, 0);
      this.movieId = this.routes.snapshot.params['movieId'];
      this.getMovieDetailsFromService(this.movieId);
    });

  }

  getMovieDetailsFromService(movieId) {
    this.apiService.getMovieDetails(movieId).subscribe(
      res => this.getMovieDetailsSuccess(res),
      error => this.getMovieDetailsErrors(error)
    );
  }

  getMovieDetailsSuccess(data) {
    if (data) {
      this.movieDetails = data;
    }
    this.apiService.getMovieVideos(this.movieId).subscribe(
      res => this.getMovieVideosSuccess(res),
      error => this.getMovieVideosErrors(error)
    );
  }

  getMovieDetailsErrors(error) {
    console.log(error);
    this.spinner.hide();
  }

  ngOnInit() {
  }

  private getMovieVideosSuccess(res) {
    if (res) {
      this.videos = res.results;
    }
    this.apiService.getSimilarMovie(this.movieId).subscribe(
      data => this.getSimilarMovieSuccess(data),
      errors => this.getSimilarMovieErrors(errors)
    );
    this.spinner.hide();
  }

  private getMovieVideosErrors(error) {
    console.log(error);
    this.spinner.hide();
  }

  private getSimilarMovieSuccess(data) {
    if (data) {
      this.similarMovies = data.results;
    }
    this.spinner.hide();

  }

  private getSimilarMovieErrors(errors: any) {
    this.spinner.hide();
  }
}
