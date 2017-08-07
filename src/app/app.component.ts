import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  moduleId : module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth : AuthService){
    auth.handleAuthentication();
  }


}