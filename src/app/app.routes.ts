import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './modules/login/login.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { Page404Component } from './modules/page404/page404.component';
import { NgModule } from '@angular/core';
import { AuthBasicGuard } from 'src/guards/auth-basic.guard';

const Rotas: Routes = [
 { path: '', loadChildren: 'src/app/modules/login/login.module#LoginModule'},
 { path: 'login', redirectTo: '' },
 { path: 'inbox', component: InboxComponent, canActivate: [AuthBasicGuard]},
 { path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule'},
 { path: '404', component: Page404Component},
 { path: '**', redirectTo: '/404'}
]

//export const ModuloRotas = RouterModule.forRoot(Rotas);

@NgModule({

    imports: [RouterModule.forRoot(Rotas)],
    exports: [RouterModule]

})
export class RotasModule {}