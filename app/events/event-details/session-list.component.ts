import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {ISession} from '../index';

@Component({
  selector: 'session-list',
  templateUrl: '/app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[];
  constructor() { }

  ngOnInit() { }

  ngOnChanges(){
    if(this.sessions){
      this.filterSessions(this.filterBy);
      this.sortBy == 'name' ? this.visibleSessions.sort(this.sortByNameAsc): this.visibleSessions.sort(this.sortByVotesDesc);
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

  private sortByNameAsc(s1: ISession, s2: ISession){
    return s1.name > s2.name? 1: -1;
  }

  private sortByVotesDesc(s1: ISession, s2: ISession){
    return s1.voters.length - s2.voters.length;
  }
}

