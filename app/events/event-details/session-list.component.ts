import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {ISession} from '../index';

@Component({
  selector: 'session-list',
  templateUrl: '/app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  visibleSessions: ISession[];
  constructor() { }

  ngOnInit() { }

  ngOnChanges(){
    if(this.sessions){
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter){
    if(this.filterBy === 'all')
      this.visibleSessions = this.sessions.slice(0);
    else{
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() == filter;
      })
    }
  }
}