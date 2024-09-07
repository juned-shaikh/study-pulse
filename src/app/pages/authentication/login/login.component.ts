import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { API } from 'src/app/constant';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    public httpService: HttpService, private dataService: DataService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  public get f() {
    return this.loginForm.controls;
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required,],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    try {
      this.httpService.post(API.LOGIN, this.loginForm.value)
        .then((resp: any) => {
          if (resp) {
            localStorage.setItem("userDetail", JSON.stringify(resp))
            sessionStorage.clear();
            this.router.navigate(['dashboard']);
          }
          else {
            this.dataService.openSnackbar("Some Error Occured.")
          }
        }).catch((e) => {
          this.dataService.openSnackbar(e.message)
        });
    } catch (error) {
      this.dataService.openSnackbar(error)
    }
  }

}
