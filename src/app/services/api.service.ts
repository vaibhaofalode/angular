import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private basUrl = 'https://reqres.in/api/';
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any>(this.basUrl + 'users?per_page=10');
  }

  getMovieDetails(movieId): Observable<any[]>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=3c6ddc5847e00b0de2d769c5098d31f6')
  }

  getUpcomingMovies(): Observable<any[]>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/upcoming?api_key=3c6ddc5847e00b0de2d769c5098d31f6')
  }

  searchMovie(string): Observable<any[]>{
    return this.http.get<any>('https://api.themoviedb.org/3/search/movie?api_key=3c6ddc5847e00b0de2d769c5098d31f6&page=1&query=' + string)
  }
}
