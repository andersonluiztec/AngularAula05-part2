import { Component, Input, Output } from "@angular/core";

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css', './header-search.css']
  })

  export class HeaderComponent { 

    @Input() title = ''
    @Input() usuario: any = {}
    @Output() filtro: '';
    isMenuOpen = false;

    handleMenuClick() {
        this.isMenuOpen = !this.isMenuOpen;
    }
  }