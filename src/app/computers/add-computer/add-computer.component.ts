import { Component, OnInit } from '@angular/core';
import { Computer } from '../computer.model';
import { ComputerService } from '../computer.service';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  computer = new Computer(0,'','','127.0.0.1');
  
  constructor(private computerService:ComputerService) { }

  ngOnInit(): void {
  }

  submit(){
    this.computerService.addComputer(this.computer).subscribe(res=>{console.log(res)});
    alert("Computer Added Correctly");
  }

}
