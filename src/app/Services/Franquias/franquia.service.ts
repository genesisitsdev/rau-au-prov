import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FranquiaService {

  constructor(private http: HttpClient) { }

  getFranquias() {
    return this.http.get(`${environment.urlBase}/auth/franquias`);
  }
}
