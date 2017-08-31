import { Component, OnInit } from '@angular/core';
import { EventsService } from "./shared/events.service";
import { ToastrService } from "../common/toastr.service";


@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent implements OnInit {
    events: any[];
    constructor(private eventService: EventsService, private toastr: ToastrService) {
       
    }

    ngOnInit() { 
        // the resaon to put it here is avoid loading values in constructor and rather do it 
        // when component is first used.
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName);
    }
}