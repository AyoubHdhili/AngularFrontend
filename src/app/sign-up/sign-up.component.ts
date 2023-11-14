import {Component} from '@angular/core';
import {User} from "../shared/models/User";
import {AuthService} from "../shared/services/auth/auth.service";
import {Roles} from "../shared/enums/role";
import {Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  user:User = new User();
  constructor(private authService : AuthService, private router:Router, private toast: NgToastService) {
  }


  onSubmit() {
    this.user.role = Roles.user;
    console.log(this.user);
    this.authService.Register(this.user).subscribe((res) =>{
      this.toast.success({detail:"Success Message", summary:"Register successfully!", duration:5000})
      this.router.navigate(['sign-in']);
    },
      (err) =>{
      this.toast.error({detail: "Error Message", summary: "Register Failed", duration: 5000})
      })
  }
}
