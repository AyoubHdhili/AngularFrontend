import { Component } from '@angular/core';
import {AuthService} from "../shared/services/auth/auth.service";
import {User} from "../shared/models/User";
import {NgToastService} from "ng-angular-popup";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  user:User = new User();

  constructor(private authService:AuthService, private toast:NgToastService, private router: Router) {
  }

  onSubmit() {
    console.log(this.user);
    this.authService.Authenticate(this.user).subscribe((res) => {
      this.toast.success({detail : "Logged in successfully !", summary:`welcome back`, duration:5000});
      localStorage.setItem('token', res.token);
      localStorage.setItem('userid',String(res.user.id));
      localStorage.setItem('firstname', res.user.firstname);
      localStorage.setItem('lastname', res.user.lastname);
        console.log(res.user.role)
      if(res.user.role === 'USER'){
        this.router.navigate(['/home']);
      }
    },
      (err) =>{
      this.toast.error({detail:"Error Message", summary:"Wrong email or password !!", duration:5000})
      })
  }

}
