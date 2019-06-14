import { Injectable } from "@angular/core";
import { EventEmitter } from 'protractor';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    filtro = new EventEmitter();

    filtrar(valor) {
        this.filtro.emit(valor);
    }
}