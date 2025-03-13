import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

 @Input('msg') message:string = '' ;




 @Output() msgEvent= new EventEmitter<string>();
 sendMessage() {
  this.msgEvent.emit('Hello from your child');
 }

  names=["cyrine","sou"]
  

}


