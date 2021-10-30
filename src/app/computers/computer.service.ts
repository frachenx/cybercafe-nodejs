import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Computer } from './computer.model';
@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  baseUrl = environment.baseUrl;
  computers:Array<Computer>;

  constructor(private http:HttpClient) { 
  }
  addComputer(computer:Computer){
    return this.http.post<any>(this.baseUrl + "add-computer.php",computer)
  }

  getComputers(){
    return this.http.get<Computer[]>(this.baseUrl + "computers.php")
  }

  getComputer(id:string){
    return this.http.get<Computer[]>(this.baseUrl + "edit-computer.php?id=" + id)
  }

  updateComputer(computer:Computer){
    return this.http.post<any>(this.baseUrl + "update-computer.php",computer);
  }
}
