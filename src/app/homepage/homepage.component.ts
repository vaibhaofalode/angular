import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  users: any;
  movies: any;


  constructor(private httpClient: HttpClient, private spinner: NgxSpinnerService, private apiService: ApiService) {
    this.getUsers();
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    this.apiService.getUpcomingMovies().subscribe(
      res => this.getUpcomingMoviesSuccess(res),
      error =>  this.getUpcomingMoviesErrors(error)
    )
  }

  getUpcomingMoviesSuccess(data) {
    if(data && data.results) {
      this.movies = data.results;
    }
    console.log(this.movies);
  }

  getUpcomingMoviesErrors(error) {
    console.log(error);
  }
  getUsers() {
    this.spinner.show();
    this.apiService.getAllUsers().subscribe(
      res => this.getAllUsersSuccess(res),
      error =>  this.getAllUsersErrors(error)
    );
  }
  getAllUsersSuccess(data) {
    if(data && data.data) {
      this.users = data.data;
    }
    this.spinner.hide();
  }

  getAllUsersErrors(error) {
    console.log(error);
    this.spinner.hide();
  }

  ngOnInit() {
  }

}
