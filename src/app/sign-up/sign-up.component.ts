import {Component} from '@angular/core';
import {User} from "../shared/models/User";
import {AuthService} from "../shared/auth/auth.service";
import {Roles} from "../shared/enums/role";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  user:User = new User();
  constructor(private authService : AuthService, private router:Router, private toast: ToastrService) {
  }


  onSubmit() {
    this.user.role = Roles.user;
    console.log(this.user);
    this.authService.Register(this.user).subscribe((res) =>{
      this.toast.success("Register successfully!", "Success Message", {
        timeOut: 5000,
        positionClass:'toast-top-center'
      })
      this.router.navigate(['sign-in']);
    },
      (err) =>{
      this.toast.error( err.error.errorMessage, "Register Failed", {
        timeOut: 3000,
        positionClass:'toast-top-center'
      })
      })
  }
}
