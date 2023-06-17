
import { AbstractControl } from '@angular/forms';

export class InputValidator{

    static isEmpty(control: AbstractControl){
        const value = control.value.trim();
        if (value.length == 0){
            return {input_invalid: true};
        }
        return null;
    }

}