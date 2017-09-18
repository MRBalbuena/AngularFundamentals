import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EventsService} from './shared/index';

@Component({
    templateUrl: '/app/events/create-event.component.html', 
    styles: [`
        em {float: right; color: #E05C65; padding-left: 10px;}
        .error input { background-color: #E3C3E5; }
        .error ::-webkit-input-placeholder {color: #999 }
        .error ::-moz-placeholder {color: #999 }
        .error :-moz-placeholder {color: #999 }
        .error :ms-input-placeholder {color: #999 }
    `]})

export class CreateEventComponent implements OnInit {
    constructor(
        private router : Router,
        private eventsService: EventsService
    ) {}

    isDirty = true;
    ngOnInit() {}

    saveEvent(formValues){        
        this.isDirty = false;
        this.eventsService.saveEvent(formValues);
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}