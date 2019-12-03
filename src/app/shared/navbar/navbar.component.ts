import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SearchMovieService } from 'src/app/services/search-movie.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { debounceTime } from "rxjs/operators";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchText: any = '';
  isSearching: boolean = false;
  constructor(private apiService: ApiService, private searchedMovieService: SearchMovieService, private spinner: NgxSpinnerService, private router: Router, private searchMovieService: SearchMovieService) {

  }

  ngOnInit() {
    this.searchedMovieService.$isSearchingMovie.subscribe((value) => {
      this.isSearching = value;
    })
  }

  searchMovie() {
    this.isSearching = true;
    this.router.navigate(['/movies']);
    this.searchMovieService.movieSearched(this.searchText);
  }
}
