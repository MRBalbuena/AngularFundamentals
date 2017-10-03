import { FormControl } from '@angular/forms';

// this is to check for any word passed in the FormControl
  export function restrictedWords(words) {
    return (control: FormControl): {[key: string]: any} => {
      if(!words) return null;

      var invalidWords = words
        .map(w => control.value.includes(w)? w: null)
        .filter(w => w != null);
      
      return control.value.includes('foo')? {'restrictedWords': invalidWords.join(', ')}: null;
    }
  }
