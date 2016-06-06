import { Component, OnInit } from '@angular/core';

import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

declare var $:any;

@Component({
    selector: 'home',
    templateUrl : "app/home.html",
    directives : [ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit{

    ngOnInit():any {
        $(".dropdown-button").dropdown();
    }

}