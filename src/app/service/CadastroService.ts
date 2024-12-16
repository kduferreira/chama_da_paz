import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'https://pastelariaapi.onrender.com/api'; 

  constructor(private http: HttpClient) {}

  cadastrarUsuario(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }
}
