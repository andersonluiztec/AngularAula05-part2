import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {

constructor(private httpClient: HttpClient) {
    
}

    logar(email: string, password: string){
       return this.httpClient
            .post('http://localhost:3200/login', { email, password })
            .pipe(
                map((resposta: any) =>{
                   localStorage.setItem('TOKEN',resposta.token);
                   return resposta;
                })
            )
    };
}