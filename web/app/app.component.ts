import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {HomeComponent} from "./home.component";
import {CourseComponent} from "./course.component";

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
export class AppComponent { }