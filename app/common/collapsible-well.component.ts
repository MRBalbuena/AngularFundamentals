import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
  <div (click)="toggleContent()" class="well pointable">
    <h4>
      <ng-content select="[well-title]"></ng-content>
    </h4>
    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
  </div>
  `
})

export class CollapsibleWellComponent implements OnInit {
visible = true;
constructor() {}

  ngOnInit() { }

  toggleContent(){
    this.visible = !this.visible
  }
}

/*
// sample of simple projection
  template: `
  <div (click)="toggleContent()" class="well pointable">
    <h4 class="well-title">{{title}}</h4>
    <ng-content *ngIf="visible"></ng-content>
  </div>
  `
*/