import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})

//to create a custome Pipe we need to implement PipTransform interface
export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, char:string) {
        //ToDo convert string having multiple '-' charcacter.
        //convert input value parameter to array of string and iterate through it
         return value.replace(char,' ');
    }


}