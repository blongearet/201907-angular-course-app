import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, switchMap, first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export const DEFAULT_AUTH_STATE: AuthState = {
  token: null
}  

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public static AUTH_TOKEN_STORAGE_KEY: string = 'myapp-auth-token'

  private authState: BehaviorSubject<AuthState>
  private authState$: Observable<AuthState>

  constructor(private http: HttpClient) {
    this.authState = new BehaviorSubject(DEFAULT_AUTH_STATE)
    this.authState$ = this.authState.asObservable()
  }

  public isLogged(): Observable<boolean> {
    return this.authState$.pipe(
      map((state: AuthState) => state.token !== null)
    )
  }

  public login(): Observable<boolean> {
    return this.http.post<LoginPostResponse>('http://localhost:3000/login', {}).pipe(
      tap(loginPostResponse => this.updateState({
        token: loginPostResponse.token
      })),
      switchMap(() => this.isLogged()),
      first()
    )
  }

  private updateState(state: AuthState) {
    localStorage.setItem(AuthService.AUTH_TOKEN_STORAGE_KEY, state.token)
    this.authState.next(state)
  }

}

export interface AuthState {
  token: string
}

export interface LoginPostResponse {
  token: string
}