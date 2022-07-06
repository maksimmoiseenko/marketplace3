import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';
import {Router} from '@angular/router';
import {BackendService} from '../../_services/backend.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public currentUser: any;
  user: any;
  form: any = {
    firstname: null,
    lastname: null,
    patronymic: null,
    sex: null
  };
  isSuccessful = false;
  isSendingFailed = false;
  errorMessage = '';
  constructor(private token: TokenStorageService,
              private router: Router,
              private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getUserById(this.token.getUser().id).subscribe(
      data => {
            this.currentUser = data;
            if (this.currentUser.id === undefined){
              this.router.navigate(['/']);
            }
            this.form.firstname = this.currentUser.firstname;
            this.form.lastname = this.currentUser.lastname;
            this.form.patronymic = this.currentUser.patronymic;
            this.form.sex = this.currentUser.sex;
          },
      error => console.log(error.error.message)
          );
  }
  onSubmit(): void{
    console.log(this.form);
    this.backendService.sendAdditionalUserInfo(this.form, this.currentUser).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSendingFailed = false;
      },
      err => {
        this.isSuccessful = false;
        this.isSendingFailed = true;
        this.errorMessage = err.error.message;
      }
    );
  }
}
