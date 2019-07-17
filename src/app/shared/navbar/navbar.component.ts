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

  constructor(private apiService: ApiService, private spinner: NgxSpinnerService, private router: Router, private searchMovieService: SearchMovieService) {

  }

  ngOnInit() { }

  searchMovie() {
    this.router.navigate(['/movies']);
    this.searchMovieService.movieSearched(this.searchText);
  }
}
