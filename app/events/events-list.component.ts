import { Component, OnInit } from '@angular/core';
import { EventsService } from "./shared/events.service";
import { ToastrService } from "../common/toastr.service";
import {ActivatedRoute} from "@angular/router";
import { IEvent } from "./index";

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent implements OnInit {
    events: IEvent;
    constructor(private eventService: EventsService, 
        private toastr: ToastrService,
        private route: ActivatedRoute
    ) {
       
    }

    ngOnInit() { 
        // the resaon to put it here is avoid loading values in constructor and rather do it 
        // when component is first used.
        //this.eventService.getEvents().subscribe(events => {this.events = events}); // now this is done in the event list resolver
        this.events = this.route.snapshot.data['eventsData'];
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName);
    }
}