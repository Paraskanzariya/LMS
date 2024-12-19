import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from './../../../core/authentication/authentication.service';
declare var FS: any; //FullStory variable
// import { TINY_EDITOR_API_KEY, TINY_EDITOR_CONIFG } from '@app/core';
@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  // apiKey = TINY_EDITOR_API_KEY; 
  // config:any = TINY_EDITOR_CONIFG
  constructor(
    // public authServices :AuthenticationService
  ) { }

  ngOnInit(): void {
    // if(this.authServices && this.authServices.credentials && this.authServices.credentials.user){
    //   let fName = this.authServices.credentials.user?.fname ? this.authServices.credentials.user.fname : ''
    //   let lName = this.authServices.credentials.user?.lname ? this.authServices.credentials.user.lname : ''
    //   const details = {}
    //   details['displayName'] = fName+' '+lName
    //   if(this.authServices.credentials.user.user_email){
    //     details['email'] = this.authServices.credentials.user.user_email
    //   }
    //   if(this.authServices.credentials.user._id && details){
    //     FS.identify(this.authServices.credentials.user._id, details);
    //   }
    // }
  }

}
