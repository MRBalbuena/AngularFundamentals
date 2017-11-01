import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// from index barrel
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventsService,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent 
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from "./nav/navbar.component";
import {Error404Component} from "./errors/404.component";

// From common
import { ToastrService } from './common/toastr.service';
import { JQ_TOKEN, CollapsibleWellComponent } from './common/index';

// route
import { appRoutes } from "./routes";

// users
import { AuthService } from "./user/auth.service";
import {DurationPipe} from './events/shared/duration.pipe';

declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe
    ],
    providers: [ 
        EventsService, 
        ToastrService, 
        EventRouteActivator,
        EventListResolver,
        AuthService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
    ],
    bootstrap: [ EventsAppComponent ]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');
    return false;
}



