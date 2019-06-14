import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface IEmail {
    to: string,
    subject: string,
    body: string
}

@Injectable()
export class EmailService {

    constructor(private httpClient: HttpClient) { }

    enviar(email: IEmail) {
        return this.httpClient
            .post('http://localhost:3200/emails', 
                   {
                      to: email.to,
                      subject: email.subject,
                      content: email.body
                   },
                   { headers: { authorization: localStorage.getItem('TOKEN') }
                })
    }

    listar(email: string) {
        return this.httpClient
            .get('http://localhost:3200/emails', 
                   { headers: { authorization: localStorage.getItem('TOKEN') }
                })
            .pipe(
                    map((resposta: any[]) =>{
                       let retorno: IEmail[] = [];
                       resposta.filter(item => item.from === email).forEach(a =>
                       {
                           retorno.push({
                               to: a.to,
                               subject: a.subject,
                               body: a.content
                           })
                       });

                       return retorno;
                    })
                )
    }
    


    listar2() {
        return this.httpClient
            .get('http://localhost:3200/emails', 
                   { headers: { authorization: localStorage.getItem('TOKEN') }
                })
            .pipe(
                map((resposta: any[]) =>{
                    let retorno: any[] = [];
                    resposta.forEach(a =>
                    {
                        retorno.push({
                            to: a.to,
                            subject: a.subject,
                            body: a.content
                        })
                    });
                    return retorno;
                }
            )
            )
        
        }
    }

    
