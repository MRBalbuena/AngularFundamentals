import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {ISession, restrictedWords} from '../index';


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
      restrictedWords(['foo', 'bar']) // now this is just a function passing the forbidden words
    ]);

    this.newSessionForm = new FormGroup({name: this.name, presenter: this.presenter, duration: this.duration, level: this.level, abstract: this.abstract})
  }

  // this is to check only one word
  // private restrictedWords(control: FormControl): {[key: string]: any}{
  //   return control.value.includes('foo')? {'restrictedWords': 'foo'}: null;
  // }

// moved to restricted word validator

  // this is to check for any word passed in the FormControl
  // private restrictedWords(words) {
  //   return (control: FormControl): {[key: string]: any} => {
  //     if(!words) return null;

  //     var invalidWords = words
  //       .map(w => control.value.includes(w)? w: null)
  //       .filter(w => w != null);
      
  //     return control.value.includes('foo')? {'restrictedWords': invalidWords.join(', ')}: null;
  //   }
  // }
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