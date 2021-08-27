import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {
  environment: any;

  constructor(private http: HttpClient) { }

  setUsuario(register: any) {
    console.log('Register no Service: ', register.value);
    return this.http.post(`${environment.urlBase}/auth/register`, register.value);
  }

  setDadosCliente(dados: any) {
    // console.log('Dados do Cliente: ', dados);
    return this.http.post(`${environment.urlBase}/auth/clientes`, dados);
    // , {observe: 'response'}
  }

}
