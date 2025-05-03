import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"titleCase"
})
export class TitleCase implements PipeTransform{

    transform(value: any, ...args: any[]) {
      return value.toLowerCase().split(' ').map((word:any)=>word.charAt(0).toUpperCase() + word.slice(1)).join();
    }

}