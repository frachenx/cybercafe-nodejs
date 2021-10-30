import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users:Array<User>;
  constructor(private userService:UserService) {
   }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users:User[])=>{
      this.users = users;
    })
  }

}
