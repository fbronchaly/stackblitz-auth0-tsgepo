import { Component} from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'home',
  template: `
  <article class="card-docs">
    <div class="btn btn-danger btn-lg" *ngIf="authService.authenticated" (click)="authService.logout()">Logout</div>
    <p class="card-docs-description" *ngIf="!authService.authenticated"><a class="btn btn-success" (click)="authService.login()">Login</a></p>
    <p class="card-docs-description" *ngIf="authService.authenticated">You are already logged in. Proceed to next step!</p>
  </article>

  <article class="card-docs">
    <p class="card-docs-description">Access <a routerLink="/account">protected page</a>. <strong>You must be logged in to do this!<br /> <span *ngIf="!authService.authenticated">You're currently not logged in!</span><span *ngIf="authService.authenticated">You are logged in!</span></strong></p>
  </article>
`,
})
export class HomeComponent {
  url;

  constructor(public authService: AuthService) {
    this.url = window.location.href; 
  }

  signup(){
    window.open('https://auth0.com/signup?utm_source=stackblitz&utm_medium=devsponsor&utm_campaign=stackblitz-angular', '_blank');
  }

}