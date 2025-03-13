import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';

  message = "Hello from your parent";
  msgEnfant='';
  receiveMessage($event: string){
    this.msgEnfant = $event;
  }
}

