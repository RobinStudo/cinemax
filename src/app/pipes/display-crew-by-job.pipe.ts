import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'displayCrewByJob'
})
export class DisplayCrewByJobPipe implements PipeTransform {

    transform(crew: Array<any>, job: string): string {
        const persons = [];

        for (let person of crew) {
            if (person.job === job) {
                persons.push(person.name);
            }
        }

        return persons.join(', ');
    }

}
