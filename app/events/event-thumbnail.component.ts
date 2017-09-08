import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from "events";
import { IEvent } from "./index";

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px;}
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb ;}
    `]
})

export class EventThumbnailComponent implements OnInit  {     
    ngOnInit(): void {}
    @Input() event: IEvent;
    
    // when using ngClass in the template : <div [ngClass]="getStartTimeClass()" 
    getStartTimeClass(){
        // a few wats:
        //1: 
        // const isEarlyStart = this.event && this.event.time === '8:00 am';
        // return { green: isEarlyStart, bold: isEarlyStart };
        //2: 
        if(this.event && this.event.time === '8:00 am')
            return 'green bold';
        return '';
        //3:
        // if(this.event && this.event.time === '8:00 am')
        //     return ['green', 'bold'];
        // return []
        
    }

    // when using ngStyle in the template : <div [ngStyle]="getStartTimeStyle()" 
    getStartTimeStyle(){
        if(this.event && this.event.time === '8:00 am')
            return {color: '#003300', 'font-weight': 'bold'};
        return {};
    }
}