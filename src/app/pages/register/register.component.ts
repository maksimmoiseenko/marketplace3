import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
    role: 'client'
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {  email, password, role} = this.form;

    this.authService.register(email, password, role).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.authService.login(email, password).subscribe(dataLogin => {
          this.tokenStorage.saveToken(dataLogin.accessToken);
          this.tokenStorage.saveUser(dataLogin);
          this.router.navigate(['/profile']);
        });
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
