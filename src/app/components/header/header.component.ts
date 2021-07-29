import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})
export class HeaderComponent {
    private _isMenuOpen = false;

    constructor(private roteador: Router) { }

    get isMenuOpen() {
        return this._isMenuOpen
    }

    toggleMenu() {
        this._isMenuOpen = !this._isMenuOpen;
    }

    logout() {
        localStorage.clear();
        this.roteador.navigate(['/logout']);
    }
}
