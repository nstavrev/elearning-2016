import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {HomeComponent} from "./home.component";
import {CourseComponent} from "./course.component";

declare var $:any;

@Component({
    selector: 'application',
    templateUrl : "app/app.html",
    directives : [ROUTER_DIRECTIVES],
    providers : [ROUTER_PROVIDERS]
})

@RouteConfig([
    { path : "/", component : HomeComponent, as : "Home" },
    { path : "/course/:id", component : CourseComponent, as : "Course" }
])
export class AppComponent implements OnInit{

    ngOnInit():any {
        $(".dropdown-button").dropdown();
    }
    
}