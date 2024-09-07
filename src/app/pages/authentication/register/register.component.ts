import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { API } from 'src/app/constant';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  constructor(
    private router: Router,
    public fb: FormBuilder,
    public httpService: HttpService, private dataService: DataService
  ) { }

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.registerForm.controls;
  }

  submit() {
    console.log(this.registerForm.value);
    if (!this.registerForm.valid) {
      return;
    }
    try {
      this.httpService.post(API.REGISTER, this.registerForm.value)
        .then((resp: any) => {
          if (resp) {
            this.router.navigate(['authentication/login']);
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
