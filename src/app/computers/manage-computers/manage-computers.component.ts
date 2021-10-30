import { Component, OnInit } from '@angular/core';
import { Computer } from '../computer.model';
import { ComputerService } from '../computer.service';
@Component({
  selector: 'app-manage-computers',
  templateUrl: './manage-computers.component.html',
  styleUrls: ['./manage-computers.component.css']
})
export class ManageComputersComponent implements OnInit {
  computers:Array<Computer>=[]

  constructor(private computerService:ComputerService) { }

  ngOnInit(): void {
    this.computerService.getComputers().subscribe((computers:Computer[])=>{
      this.computers= computers});
    // this.computerService.getComputers().subscribe(res=>{console.log(res)});    
  }

}
