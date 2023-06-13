
import { AbstractControl } from '@angular/forms';

export class InputValidator{

    static isEmpty(control: AbstractControl){
        const value = control.value.trim();
        console.log("valor : "+value);
        console.log("length : "+value.length);
        if (value.length == 0){
            return {input_invalid: true};
        }
        return null;
    }

}