import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit {
  userId: any;
  user: any;

  constructor(private routes: ActivatedRoute, private httpClient: HttpClient, private spinner: NgxSpinnerService) {
    this.spinner.show();
    this.userId = this.routes.snapshot.params['userId'];
    this.getUserDetails();
  }

  getUserDetails() {
    this.httpClient.get('https://reqres.in/api/users/' + this.userId).subscribe(
      (data) => this.getUserDetailsSuccess(data),
      (error) => this.getUserDetailsError(error),
    );
  }

  getUserDetailsSuccess(data) {
    if(data && data.data) {
      this.user = data.data;
    }
    this.spinner.hide();    
  }

  getUserDetailsError(error) {
    this.spinner.hide();    
  }

  ngOnInit() {
  }
}
