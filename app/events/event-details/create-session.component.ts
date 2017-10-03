import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {ISession} from '../index';

@Component({
  templateUrl: 'app/events/event-details/create-session.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input, .error select, .error textarea { background-color: #E3C3E5; }
    .error ::-webkit-input-placeholder {color: #999 }
    .error ::-moz-placeholder {color: #999 }
    .error :-moz-placeholder {color: #999 }
    .error :ms-input-placeholder {color: #999 }
  `]
})

export class CreateSessionComponent implements OnInit {

  constructor() {}
  newSessionForm : FormGroup;
  
  //declareing formcontrols public can be accessed from template without newSessionGroup prefix 
  name : FormControl;
  presenter : FormControl;
  duration : FormControl;
  level : FormControl;
  abstract : FormControl;
  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required, 
      Validators.maxLength(400),
      this.restrictedWords
    ]);

    this.newSessionForm = new FormGroup({name: this.name, presenter: this.presenter, duration: this.duration, level: this.level, abstract: this.abstract})
  }

  private restrictedWords(control: FormControl): {[key: string]: any}{
    return control.value.includes('foo')? {'restrictedWord': 'foo'}: null;
  }

  saveSession(formValues){
    let newSession: ISession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      level: formValues.level,
      duration: +formValues.duration, // + to convert to number
      abstract: formValues.abstract,
      voters: []
    };      
    console.log(newSession);
  }
}