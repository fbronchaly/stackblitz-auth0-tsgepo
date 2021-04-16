import { Component} from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'account',
  template: `
    <section class="jumbotron">
    <p>Well done!</p>
    <div class="btn btn-success btn-lg" routerLink="/">Back to Homepage</div>
  </section>
  `
})
export class AccountComponent {
  profile: any;

  constructor(public authService: AuthService) {
   }

}