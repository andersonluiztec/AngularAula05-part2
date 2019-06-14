import { Pipe, PipeTransform } from "@angular/core";
import { IEmail } from 'src/app/services/email.service';

@Pipe({
    name: "filtraEmail"
})

export class FiltraEmail implements PipeTransform {
    transform(emails: IEmail[], valor: string) {
        valor = valor.toUpperCase();

        return emails.filter(email => {
            return email.body ? email.body.toUpperCase().includes(valor) : '';
        })
    }
}