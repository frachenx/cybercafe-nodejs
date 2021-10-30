import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'


//COMPONENTS
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { SidebarComboComponent } from './sidebar/sidebar-combo/sidebar-combo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComputerComponent } from './computers/add-computer/add-computer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageComputersComponent } from './computers/manage-computers/manage-computers.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ManageUsersComponent } from './users/manage-users/manage-users.component';
import { EditComputerComponent } from './computers/edit-computer/edit-computer.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { UsersArchivedComponent } from './users/users-archived/users-archived.component';
import { SearchComponent } from './users/search/search.component';
import { BetweenDatesComponent } from './reports/between-dates/between-dates.component';

const routes:Routes=[
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'add-computer',component:AddComputerComponent},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'manage-computers',component:ManageComputersComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'manage-users',component:ManageUsersComponent},
  {path:'edit-computer/:id',component:EditComputerComponent},
  {path:'view-user/:id',component:ViewUserComponent},
  {path:'users-archived',component:UsersArchivedComponent},
  {path:'search',component:SearchComponent},
  {path:'report',component:BetweenDatesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    SidebarComboComponent,
    NavbarComponent,
    AddComputerComponent,
    HomeComponent,
    DashboardComponent,
    ManageComputersComponent,
    AddUserComponent,
    ManageUsersComponent,
    EditComputerComponent,
    ViewUserComponent,
    UsersArchivedComponent,
    SearchComponent,
    BetweenDatesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
