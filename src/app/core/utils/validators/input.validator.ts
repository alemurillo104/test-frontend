
import { AbstractControl } from '@angular/forms';

export class InputValidator{

    static isEmpty(control: AbstractControl) : boolean{
        const value = control.value;
        console.log(value);
        return (value.length == 0);
    }

}