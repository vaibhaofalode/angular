import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchText: any = '';
  
  constructor(private apiService: ApiService) {

  }

  ngOnInit() {}

  searchMovie() {
    this.searchText = this.searchText.trim();
    this.apiService.searchMovie(this.searchText).subscribe(
      res => this.searchTextSuccess(res),
      error =>  this.searchTextErrors(error)
    )
  }

  searchTextSuccess(data) {
    console.log(data);
  }

  searchTextErrors(error) {
    console.log(error);
  }
}
