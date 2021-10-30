import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Computer } from 'src/app/computers/computer.model';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  id:string;
  user:User;
  computer:string;
  checkedOut:boolean;
  constructor(private route:ActivatedRoute,private userService:UserService) {

    route.params.subscribe(params=>{
      this.id=params['id']});
      this.userService.getUser(this.id).subscribe((users:User[])=>{
      this.user = users[0];
      this.user.status==="" ? this.checkedOut=false : this.checkedOut=true;
    })
   }

  ngOnInit(): void {
  }

  update(){
    this.userService.updateUser(this.user).subscribe(res=>console.log(res));
    this.checkedOut=true;
    alert("User Updated Correctly");
  }
}
