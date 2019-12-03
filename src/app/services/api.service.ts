import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private basUrl = 'https://api.themoviedb.org/3/';
  private apiKeyUrl = 'api_key=3c6ddc5847e00b0de2d769c5098d31f6';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any>(this.basUrl + 'users?per_page=10');
  }

  getMovieDetails(movieId): Observable<any[]> {
    return this.http.get<any>(this.basUrl + 'movie/' + movieId + '?' + this.apiKeyUrl);
  }

  getUpcomingMovies(): Observable<any[]> {
    return this.http.get<any>(this.basUrl + 'movie/upcoming?' + this.apiKeyUrl);
  }

  searchMovie(string): Observable<any[]> {
    return this.http.get<any>(this.basUrl + 'search/movie?' + this.apiKeyUrl + '&page=1&query=' + string);
  }

  getMovieVideos(movieId): Observable<any[]> {
    return this.http.get<any>(this.basUrl + 'movie/' + movieId + '/videos?' + this.apiKeyUrl + '&language=en-US');
  }

  getSimilarMovie(movieId): Observable<any[]> {
    return this.http.get<any>(this.basUrl + 'movie/' + movieId + '/similar?' + this.apiKeyUrl + '&language=en-US');
  }
}
