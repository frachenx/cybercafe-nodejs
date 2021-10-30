import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Computer } from '../computer.model';
import { ComputerService } from '../computer.service';
@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {
  id:string;
  computer = new Computer(0,'','','127.0.0.1');
  constructor(private route:ActivatedRoute,private computerService:ComputerService) {
    route.params.subscribe(params=>{this.id=params['id']})
    this.computerService.getComputer(this.id).subscribe((computer:Computer[])=>{
      console.log(computer); 
      this.computer= computer[0]})
   }

  ngOnInit(): void {
    
  }

  Submit(){
    this.computerService.updateComputer(this.computer).subscribe(res=>{console.log(res)});
    alert("Computer Updated Correctly");
  }
}
