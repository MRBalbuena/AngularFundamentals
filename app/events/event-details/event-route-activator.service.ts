import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {EventsService} from '../shared/events.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService : EventsService, private router : Router) {}

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean | Observable < boolean > | Promise < boolean > {
    const eventExists = !!this
      .eventService
      .getEvent(+route.params['id']);

    if (!eventExists) 
      this.router.navigate(['/404'])

    return eventExists;
  }

}