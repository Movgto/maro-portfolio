import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatListModule } from '@angular/material/list'

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss'],
    imports: [
        MatExpansionModule,
        MatListModule
    ]
})
export class Home {
    constructor() { }

    ngOnInit(): void {
        // Initialization logic here
    }
}