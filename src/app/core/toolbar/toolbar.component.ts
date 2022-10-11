import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services';
import { ToolbarHelpers } from './toolbar.helpers';

@Component({
  selector: 'cdk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	isOpen: boolean = false;
  @Input() sidenav;
  @Input() sidebar;
  @Input() drawer;
  @Input() matDrawerShow;
  error = '';
  loading = false;
  profileData: any;
  searchOpen: boolean = false;
  profile_name: any;
  toolbarHelpers = ToolbarHelpers;
  constructor(private router: Router, private userService: UserService) {
    // this.getProfile();
  }

  ngOnInit() {
    console.log("toolbar hit", this.toolbarHelpers.currentUser)
    console.log('profile store', JSON.parse(localStorage.getItem('profile')))
    console.log('profile check', localStorage.getItem('profile') ? 'Welcome ' + JSON.parse(localStorage.getItem('profile')).full_name : '');
    this.profile_name = localStorage.getItem('profile') ? 'Welcome ' + JSON.parse(localStorage.getItem('profile')).full_name : ''
    // this.currentUser.currentUserName= localStorage.getItem('profile') ? 'Welcome ' + JSON.parse(localStorage.getItem('profile')).full_name : '' ;
     this.reloadCurrentRoute();
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    console.log('current',currentUrl)
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
  // getProfile() {
  //   this.userService.getProfile()
  //     .pipe()
  //     .subscribe(
  //       data => {

  //         this.profileData = data.data;
  //         console.log('data', this.profileData)
  //         localStorage.setItem('profile', JSON.stringify(this.profileData))
  //       },
  //       error => {

  //         this.error = error;
  //         this.loading = false;
  //         console.log('errrr', this.error["error"])
  //       });

  // }
	logout() {
		console.log('hit')
      this.userService.logout();
	  this.router.navigate(["/login"])
	  localStorage.clear();   
	}
	profile() {
		this.router.navigate(["/auth/profile"])
	}

}
