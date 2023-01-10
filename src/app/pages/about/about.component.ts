import { Component } from '@angular/core';
import { Observable } from "rxjs";

@Component({
    selector: 'app-page-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    title: string = 'A propos de Cinemax';
    image: string = 'https://via.placeholder.com/150';
    loaded: boolean = false;
    entries: Array<string> = ['Bonjour', 'Hola', 'Hello'];

    constructor() {
        setTimeout(() => {
            this.loaded = true;
        }, 5000);
    }
}
