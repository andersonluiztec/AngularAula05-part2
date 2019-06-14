import { NgModule } from "@angular/core";
import { CadastroComponent } from "./cadastro.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CmailFormGroupComponent } from 'src/app/shared/modules/cmail-form-group/cmail-form-group.component';
import { cmailFormFieldDirective } from 'src/app/shared/modules/cmail-form-group/directives/cmailFormField.directive';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CmailFormModule } from 'src/app/shared/modules/cmail-form-group.module';

@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CadastroRoutingModule,
        CmailFormModule
    ],
    exports: [
        CadastroComponent
    ]
})

export class CadastroModule {}