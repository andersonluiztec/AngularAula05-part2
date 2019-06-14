import { NgModule } from "@angular/core";
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CmailFormModule } from 'src/app/shared/modules/cmail-form-group.module';
import { LoginService } from './login.service';


@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule, CmailFormModule],
    exports: [LoginComponent],
    providers: [
        LoginService
    ]
})

export class LoginModule{}