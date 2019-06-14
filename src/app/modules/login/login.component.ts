import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { LoginService } from './login.service';


@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{

    formLogin: FormGroup;

    constructor(private httpClient: HttpClient, private router: Router, private loginService: LoginService) {
        
        if (localStorage.getItem('TOKEN')) {
            localStorage.removeItem('TOKEN');
        }

        let emailInicial = '';
        let senhaInicial = '';

        if (this.router.getCurrentNavigation().extras.state) {
            emailInicial = this.router.getCurrentNavigation().extras.state.email;
            senhaInicial = this.router.getCurrentNavigation().extras.state.password;
        }

        this.formLogin = new FormGroup({
            email: new FormControl(emailInicial, [Validators.required, Validators.email]),
            senha: new FormControl(senhaInicial, [Validators.required])
            /*senha: new FormControl(senhaInicial, {
                asyncValidators: [this.validaUsuario.bind(this)],
                validators: [Validators.required]
            })*/
         });  
    } 

    validaUsuario(form: FormGroup) {
        return this.httpClient.get('http://localhost:3200/users').pipe(
            map((resposta: any) => {
                const usuariosFiltrados = resposta.users.filter(user => {
                    return user.email === form.value.email && user.password === form.value.senha ;
                });
                const valido = usuariosFiltrados.length !== 0;
                return !valido ? { loginInvalido: true } : null;
            })
        );
    }

    Login() {
        if (this.formLogin.valid) {
            

            this.loginService.logar(
                this.formLogin.value.email,
                this.formLogin.value.senha)
            .subscribe((resposta: any) => {
                this.router.navigate(['inbox'], 
                    {
                        state: {
                            'nome': resposta.name,
                            'email': resposta.email
                        }
                    },
                    )
            },
            (err: any) => {
                alert('Erro: ' + err.error.message);
            })
            

            // this.httpClient.post('http://localhost:3200/login', {
            //     email: this.formLogin.value.email,
            //     password: this.formLogin.value.senha
            // })
            // .subscribe(
            //     (resposta: any) => {
            //         console.log(resposta);
            //             localStorage.setItem('TOKEN', resposta.token);
            //             this.router.navigate(['inbox']);
            //     }
            // ),
            //  err => {
            //     console.log('Erro', err);
            // },
            // () => {}
            
            
        }
    }

    Cadastro () {
        this.router.navigate(['cadastro']);
    }
}

