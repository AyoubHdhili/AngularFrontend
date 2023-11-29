import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  endpoint=`${environment.baseUrl}admin/user/retrieve-all-users`;

  constructor() { }
}
