import { Component, OnInit } from '@angular/core';
import { AuthService } from "../user/auth.service";
import { EventsService, ISession } from '../events/index';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm { display: none }}
        li > a.active { color: #F97924; }
    `]
})

export class NavBarComponent implements OnInit {
    foundSessions: ISession[];
    constructor(
        private authService: AuthService,
        private eventService: EventsService
    ) { }

    ngOnInit() { }

    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        })
    }
}