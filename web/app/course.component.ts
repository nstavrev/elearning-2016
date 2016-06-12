import { Component, OnInit } from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';
import {COURSES} from "./services/mock-courses";

declare var $:any;

@Component({
    selector: 'course',
    templateUrl : "app/course.html"
})
export class CourseComponent implements OnInit {

    ngOnInit():any {
        $(document).ready(function(){
            $('.collapsible').collapsible({
                accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
            });
        });
    }

    private course;

    private isIntroVisible:boolean = true;

    private areLecturesVisible:boolean = false;

    constructor(params:RouteParams, router: Router){
        this.course = COURSES.find((course) => {
            return course.id == params.get("id");
        });

        if(this.course == undefined){
            router.navigate(["Home"]);
        }
    }

    showIntro(){
        if(this.isIntroVisible){
            this.isIntroVisible = false;
        } else {
            this.isIntroVisible = true;
        }

        this.areLecturesVisible = false;
    }

    showLectures(){
        if(this.areLecturesVisible){
            this.areLecturesVisible = false;
        } else {
            this.areLecturesVisible = true;
        }

        this.isIntroVisible = false;
    }

}