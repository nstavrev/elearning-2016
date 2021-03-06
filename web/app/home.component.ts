import { Component } from '@angular/core';

import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {COURSES} from "./services/mock-courses";

declare var $:any;

@Component({
    selector: 'home',
    templateUrl : "app/home.html",
    directives : [ROUTER_DIRECTIVES]
})
export class HomeComponent {

    courses = COURSES;

}