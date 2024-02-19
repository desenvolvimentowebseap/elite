import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class LoginService {

  constructor( private httpClient:HttpClient ) { }

  public login(username: string, password: string):Observable<any>{

    const url = `${environment.baseApiUrl}login`;

    return this.httpClient.post(url, {username, password}, {responseType: 'json'}).pipe(
      map((data) => this.setTokenLocalStorage(data)),
      catchError((err) => {
        this.removerTokenLocalStorage();
        throw 'Falha ao efetuar login'
      })
    )
  }

  public getToken(): string | null{
    return localStorage.getItem(environment.token);
  }

  private setTokenLocalStorage(response: any) {
    const {type, token} = response;
    localStorage.setItem(environment.token , token);
  }

  private removerTokenLocalStorage():void {
    localStorage.removeItem(environment.token);
  }

}


