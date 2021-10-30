import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;
  users:Array<User>
  constructor(private http:HttpClient) {

  }

  addUser(user:User){
    return this.http.post<any>(this.baseUrl + "add-user.php",user);
  }

  getUsers(){
    return this.http.get<User[]>(this.baseUrl + "users.php" );
  }

  getArchivedUsers(){
    return this.http.get<User[]>(this.baseUrl + "archive-users.php" );
  }

  getUser(id:string){
    return this.http.get<User[]>(this.baseUrl + "view-user.php?id=" + id);
  }

  searchUsers(search:string){
    return this.http.get<User[]>(this.baseUrl+ "search-users.php?search=" + search);
  }

  usersReport(startDate:string,endDate:string){
    console.log(`${this.baseUrl}report.php?start=${startDate}&end=${endDate}`);
    console.log(startDate);
    return this.http.get<User[]>(`${this.baseUrl}report.php?start=${startDate}&end=${endDate}` );
  }

  updateUser(user:User){
    return this.http.post<any>(this.baseUrl + "update-user.php",user);
  }

  



}
