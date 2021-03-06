import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authenticate();
  }

}
