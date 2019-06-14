import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const rotas: Routes = [
    { path: '', component: CadastroComponent}
];

@NgModule({
    imports: [ RouterModule.forChild(rotas)],
    exports: [ RouterModule ]
})

export class CadastroRoutingModule{}