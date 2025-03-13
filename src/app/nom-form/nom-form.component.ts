import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nom-form',
  standalone: false,
  templateUrl: './nom-form.component.html',
  styleUrl: './nom-form.component.css'
})
export class NomFormComponent {

  nomFormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.minLength(3), Validators.required]),
    lastName: new FormControl('',Validators.required),
    age: new FormControl(0,[Validators.min(18), Validators.max(30)]),

})
isInvalidAndTouchedOrDirty(FormControl: FormControl) {
  return FormControl.invalid && (FormControl.dirty || FormControl.touched);
}

onSubmit() {
  this.nomFormGroup.markAllAsTouched();
  if(this.nomFormGroup.invalid) {
    console.log("Invalid form");
  } else {
    console.log(this.nomFormGroup.value);
  }
 
}


}



