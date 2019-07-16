import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId: any;
  movieDetails: any;
  constructor(private routes: ActivatedRoute, private httpClient: HttpClient, private apiService: ApiService) {
    this.movieId = this.routes.snapshot.params['movieId'];
    console.log(this.movieId);
    this.getMovieDetailsFromService(this.movieId)
  }
  getMovieDetailsFromService(movieId) {
    this.apiService.getMovieDetails(movieId).subscribe(
      res => this.getMovieDetailsSuccess(res),
      error =>  this.getMovieDetailsErrors(error)
    )
  }
  getMovieDetailsSuccess(data) {
    if(data) {
      this.movieDetails = data;
    }
    console.log(data);
  }
  getMovieDetailsErrors(error) {
    console.log(error);
  }
  ngOnInit() {
  }

}
