
import { AbstractControl, FormControl } from '@angular/forms';



export class SignUpFormValidators {
	static differentPasswordsValidator(control: AbstractControl) {
		const passValue = control.get('password').value;
		const repeatPassValue = control.get('repeatPassword').value;

		const samePasswords = repeatPassValue === passValue;

		return samePasswords ? null : { passwordsDiffer: true };
	}
}
