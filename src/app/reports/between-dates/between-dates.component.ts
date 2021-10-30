import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users/user.model';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-between-dates',
  templateUrl: './between-dates.component.html',
  styleUrls: ['./between-dates.component.css']
})
export class BetweenDatesComponent implements OnInit {
  dateStart: string;
  dateEnd: string;
  users: User[];
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
  }

  submit() {
    // this.dateStart = this.dateStart.substring(8, 10) + "-" + this.dateStart.substring(5, 7) + "-" + this.dateStart.substring(0, 4)
    // this.dateEnd = this.dateEnd.substring(8, 10) + "-" + this.dateEnd.substring(5, 7) + "-" + this.dateEnd.substring(0, 4)
    this.userService.usersReport(this.dateStart, this.dateEnd).subscribe((users: User[]) => {
      this.users = users;
    })

  }
}
