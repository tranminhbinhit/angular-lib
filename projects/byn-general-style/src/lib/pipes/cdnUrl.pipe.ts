import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cdnUrl',
})
export class CdnUrlPipe implements PipeTransform {
  transform(value: string) {
    return `https://cdn.byn.vn/${value}`;
  }
}