import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetings',
})
export class GreetingsPipe implements PipeTransform {
  transform(value: String): String {
    if(!value)
    {
      return "";
    }
    else
      return 'Hello, '+value;
  }
}
