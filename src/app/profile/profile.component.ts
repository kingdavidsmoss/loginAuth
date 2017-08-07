import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service'

@Component({
  moduleId : module.id,
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
profile: any;

  constructor(private auth : AuthService){

  }
  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}
