import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-archived',
  templateUrl: './users-archived.component.html',
  styleUrls: ['./users-archived.component.css']
})
export class UsersArchivedComponent implements OnInit {

  users:Array<User>;
  constructor(private userService:UserService) {
   }

  ngOnInit(): void {
    this.userService.getArchivedUsers().subscribe((users:User[])=>{
      this.users = users;
    })
  }

}
