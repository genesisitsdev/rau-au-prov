import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getConsultaCep(cep) {
    return this.http.get(`${environment.urlConsultaCep}/${cep}/json/`);
  }

  setEndereco(data) {
    console.log('Informações no service: ', data);
     return this.http.post(`${environment.urlBase}/auth/endereco`, data);
  }
}
