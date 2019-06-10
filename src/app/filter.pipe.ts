import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user/user';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: User[], text: string, key: string): any[] {
    return value.filter(i => i[key].indexOf(text)!=-1);
  }
}
