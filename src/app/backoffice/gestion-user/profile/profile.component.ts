import {Component, OnInit} from '@angular/core';
import {User} from "../../../shared/models/User";
import {UserService} from "../../../shared/services/userService/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user:User = new User();
  id : number = 0;

  constructor(private userService:UserService, private _activated: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._activated.params.subscribe((params) => {
      this.id = params['id'];
      this.userService.getUserById(this.id).subscribe((res) => {
        this.user = res;
      })
    })
  }

  update() {
    this.userService.updateUser(this.id,this.user).subscribe((res) =>{
      console.log(res);
    })
  }
}
