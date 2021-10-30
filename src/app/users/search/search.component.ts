import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search:string;
  users:Array<User>
  constructor(private userService:UserService) {
    
   }

  ngOnInit(): void {
  }

  Search(){
    this.userService.searchUsers(this.search).subscribe((users:User[])=>{
      this.users = users;
    })
  }

}
