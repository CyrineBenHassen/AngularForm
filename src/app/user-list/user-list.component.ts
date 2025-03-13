import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent  implements OnInit{
  name="Cyrine" ;

  imagePath="/img.png"
message='';
isValid=true;

  sendMessage() {
    alert('hello cycy');
   }



  constructor() {}


  ngOnInit(): void {
      
  }


  

}
