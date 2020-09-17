import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private chave = 'authToken';

  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string): void {
    window.localStorage.setItem(this.chave, token);
  }

  getToken(): string {
    return window.localStorage.getItem(this.chave);
  }

  removeToken(): void {
    window.localStorage.removeItem(this.chave);
  }
}
