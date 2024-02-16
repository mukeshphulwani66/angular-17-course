import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contryCode',
  standalone: true
})
export class ContryCodePipe implements PipeTransform {

  transform(value: number, country?:string): string {
    let code = "+91-"
    if(country == "USA") code = "+1-"
    return code + value;
  }

}
