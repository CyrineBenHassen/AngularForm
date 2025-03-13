import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mon-form2',
  standalone: false,
  templateUrl: './mon-form2.component.html',
  styleUrl: './mon-form2.component.css'
})
export class MonForm2Component {
  
  totalPrice = 0;
  nomFormGroup = new FormGroup({
    price : new FormControl(0),
    quantity : new FormControl(0)


})

ngOnInit() {
  this.nomFormGroup.valueChanges.subscribe(
  (value) => {
    this.totalPrice = value.price! * value.quantity!;
  }
  )
}


onSubmit() {
  console.log(this.nomFormGroup.value);
}



}
