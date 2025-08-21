import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ProduitInterface } from './produit-interface';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseUrl = 'http://localhost:5000';

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/produits',).pipe(catchError(error => {
      console.log(error);
      return throwError(() => error);
    }
    ));
  }
  create(produit: ProduitInterface): Observable<any> {
    return this.httpClient.post(
      this.baseUrl + '/produits',
      JSON.stringify(produit),
      this.httpOption)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(() => error);
        })
      );
  }


  getSingle(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/produits/' + id,).pipe(catchError(error => {
      console.log(error);
      return throwError(() => error);
    }
    ));
  }
  delete(id: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/produits/' + id).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error)
      })
    )
  }
}
