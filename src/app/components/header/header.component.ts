import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderDataService } from "src/app/services/header-data.service";
import { PageDataService } from "src/app/services/page-data.service";

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

    tituloDaPagina = 'CMail';

    constructor(
        private roteador: Router,
        private pageService: PageDataService,
        private headerDataService: HeaderDataService) {

        this.pageService
            .titulo
            .subscribe(novoTitulo => {
                this.tituloDaPagina = novoTitulo;
            });
    }

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

    handleBuscaChanges({ target }: { target: any }) {
        this.headerDataService.atualizarTermoDeFiltro(target.value)
    }
}
