import { CommonModule } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { provideIcons, NgIcon } from '@ng-icons/core'
import { heroHome } from '@ng-icons/heroicons/outline'
import { heroHomeSolid } from '@ng-icons/heroicons/solid'
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrls: ['./header.scss'],
    imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    NgIcon,
    RouterLink
],
    providers: [
        provideIcons({
            heroHome,
            heroHomeSolid
        })
    ]
})
export class Header implements OnDestroy {
    currentUrl = signal('');
    private _routeSubscription: Subscription|undefined;
    constructor(        
        router: Router
    ) {
        this.currentUrl.set(router.url);

        console.log(this.currentUrl());

        this._routeSubscription = router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentUrl.set(router.url);
            }
        });
    }

    ngOnDestroy(): void {
        this._routeSubscription?.unsubscribe();
    }
}