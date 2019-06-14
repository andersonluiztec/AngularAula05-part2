import { NgModule } from "@angular/core";
import { cmailFormFieldDirective } from './cmail-form-group/directives/cmailFormField.directive';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [cmailFormFieldDirective, CmailFormGroupComponent],
    imports: [CommonModule],
    exports: [cmailFormFieldDirective, CmailFormGroupComponent]
})

export class CmailFormModule{}