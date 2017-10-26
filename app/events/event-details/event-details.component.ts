import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ActivatedRoute } from "@angular/router";
import {IEvent, ISession} from "../index";

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px; }
        .event-image { height:100px; }
        a {pointer:cursor}
    `]
})

export class EventDetailsComponent implements OnInit {
addMode : boolean;
event : IEvent;
filterBy: string = 'all';
sortBy: string = 'votes';
constructor(private eventService : EventsService, private route : ActivatedRoute) {

    }

    ngOnInit() { 
        this.event = this.eventService.getEvent(this.route.snapshot.params['id']);
    }

    addSession(){
        this.addMode = true;
    }

    saveNewSession(session: ISession){
        // this obtains the max id from event.sessions in this case
        const maxId = Math.max.apply(null, this.event.sessions.map(s => s.id));

        // have to set an id as it's required in the model
        session.id = maxId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(session);
        this.addMode = false;
    }

    cancelAddSession(){
        this.addMode = false;
    }
}