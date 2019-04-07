import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  users: any;


  constructor(private httpClient: HttpClient, private spinner: NgxSpinnerService) {
    this.getUsers();
  }

  getUsers() {
    this.spinner.show();
    this.httpClient.get('https://reqres.in/api/users?per_page=10').subscribe(
      (data) => this.getDataSuccess(data),
      (error) => this.getDataError(error)
    );
  }
  getDataSuccess(data) {
    if(data && data.data) {
      this.users = data.data
    }
    this.spinner.hide();
  }

  getDataError(error) {
    this.spinner.hide();    
  }

  ngOnInit() {
  }

}
