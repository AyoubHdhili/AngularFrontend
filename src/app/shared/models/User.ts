import {Roles} from "../enums/role";

export class User{
  id!:number;
  firstname!:string;
  lastname!:string;
  email!:string;
  password!:string;
  role!:Roles;
}
