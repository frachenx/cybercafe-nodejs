"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/common/http");
//COMPONENTS
const app_component_1 = require("./app.component");
const sidebar_component_1 = require("./sidebar/sidebar.component");
const sidebar_item_component_1 = require("./sidebar/sidebar-item/sidebar-item.component");
const sidebar_combo_component_1 = require("./sidebar/sidebar-combo/sidebar-combo.component");
const navbar_component_1 = require("./navbar/navbar.component");
const add_computer_component_1 = require("./computers/add-computer/add-computer.component");
const home_component_1 = require("./home/home.component");
const dashboard_component_1 = require("./dashboard/dashboard.component");
const manage_computers_component_1 = require("./computers/manage-computers/manage-computers.component");
const add_user_component_1 = require("./users/add-user/add-user.component");
const manage_users_component_1 = require("./users/manage-users/manage-users.component");
const edit_computer_component_1 = require("./computers/edit-computer/edit-computer.component");
const view_user_component_1 = require("./users/view-user/view-user.component");
const users_archived_component_1 = require("./users/users-archived/users-archived.component");
const search_component_1 = require("./users/search/search.component");
const between_dates_component_1 = require("./reports/between-dates/between-dates.component");
const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'add-computer', component: add_computer_component_1.AddComputerComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'manage-computers', component: manage_computers_component_1.ManageComputersComponent },
    { path: 'add-user', component: add_user_component_1.AddUserComponent },
    { path: 'manage-users', component: manage_users_component_1.ManageUsersComponent },
    { path: 'edit-computer/:id', component: edit_computer_component_1.EditComputerComponent },
    { path: 'view-user/:id', component: view_user_component_1.ViewUserComponent },
    { path: 'users-archived', component: users_archived_component_1.UsersArchivedComponent },
    { path: 'search', component: search_component_1.SearchComponent },
    { path: 'report', component: between_dates_component_1.BetweenDatesComponent }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            sidebar_component_1.SidebarComponent,
            sidebar_item_component_1.SidebarItemComponent,
            sidebar_combo_component_1.SidebarComboComponent,
            navbar_component_1.NavbarComponent,
            add_computer_component_1.AddComputerComponent,
            home_component_1.HomeComponent,
            dashboard_component_1.DashboardComponent,
            manage_computers_component_1.ManageComputersComponent,
            add_user_component_1.AddUserComponent,
            manage_users_component_1.ManageUsersComponent,
            edit_computer_component_1.EditComputerComponent,
            view_user_component_1.ViewUserComponent,
            users_archived_component_1.UsersArchivedComponent,
            search_component_1.SearchComponent,
            between_dates_component_1.BetweenDatesComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes),
            forms_1.FormsModule,
            http_1.HttpClientModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
