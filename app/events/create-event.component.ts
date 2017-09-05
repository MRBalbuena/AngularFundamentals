import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    templateUrl: '/app/events/create-event.component.html'
})

export class CreateEventComponent implements OnInit {
    constructor(private router: Router) { }
    
    isDirty = true;
    ngOnInit() { }
    cancel(){
        this.router.navigate(['/events']);
    }
}