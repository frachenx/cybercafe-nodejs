import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/computers/computer.model';
import { ComputerService } from 'src/app/computers/computer.service';
import { User } from '../user.model';
import { UserService } from '../user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  computers:Computer[];
  user:User

  constructor(private userService:UserService,private computerService:ComputerService) {
    this.computerService.getComputers().subscribe((computers:Computer[])=>{
      this.computers= computers});
    this.user =  new User("","","","","","","","","","","","");
   }

  ngOnInit(): void {
    
  }
  
  submit(){
    this.userService.addUser(this.user).subscribe(res=>{console.log(res)});
    alert("User Added Correctly");
  }
}
