import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ICOsService {
  X_RAPIDAPI_KEY = '60f74815bamsh6ee1cf5dc025ed7p1926acjsn337733968ff2';
  CIO_BASE_URL = 'https://ICOWatchListraygorodskijV1.p.rapidapi.com/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': this.X_RAPIDAPI_KEY
    })
  };

  public getAllICOs(): Observable<any> {
    return this.http.post<any>(this.CIO_BASE_URL + 'getAllICOs', {}, this.httpOptions)
      .pipe(
        // catchError(this.handleError('', hero))
      );
  }

  public getLiveICOs(): Observable<any> {
    return this.http.post<any>(this.CIO_BASE_URL + 'getOnlyLiveICOs', {}, this.httpOptions)
      .pipe(
        // catchError(this.handleError('', hero))
      );
  }

  public getUpcomingICOs(): Observable<any> {
    return this.http.post<any>(this.CIO_BASE_URL + 'getOnlyUpcomingICOs', {}, this.httpOptions)
      .pipe(
        // catchError(this.handleError('', hero))
      );
  }

  public getCompletedICOs(): Observable<any> {
    return this.http.post<any>(this.CIO_BASE_URL + 'getOnlyFinishedICOs', {}, this.httpOptions)
      .pipe(
        // catchError(this.handleError('', hero))
      );
  }

  constructor(private http: HttpClient) {

   }
}
