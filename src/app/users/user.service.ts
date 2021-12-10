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
    return this.http.post<any>(this.baseUrl + "users/add-user",user);
  }

  getUsers(){
    return this.http.get<User[]>(this.baseUrl + "users/active-users" );
  }

  getArchivedUsers(){
    return this.http.get<User[]>(this.baseUrl + "users/archived-users" );
  }

  getUser(id:string){
    return this.http.get<User[]>(this.baseUrl + "users/" + id);
  }

  searchUsers(search:string){
    return this.http.get<User[]>(this.baseUrl+ "users/search/" + search);
  }

  usersReport(startDate:string,endDate:string){
    console.log(`${this.baseUrl}report.php?start=${startDate}&end=${endDate}`);
    console.log(startDate);
    return this.http.get<User[]>(`${this.baseUrl}users/${startDate}/${endDate}` );
  }

  updateUser(user:User){
    return this.http.put<any>(this.baseUrl + "users/" + user.id,user);
  }

  



}
