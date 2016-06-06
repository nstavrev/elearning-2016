import { Component, Output } from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';
import {COURSES} from "./services/mock-courses";

@Component({
    selector: 'course',
    templateUrl : "app/course.html"
})
export class CourseComponent {

    private course;

    constructor(params:RouteParams, router: Router){
        this.course = COURSES.find((course) => {
            return course.id == params.get("id");
        });

        if(this.course == undefined){
            router.navigate(["Home"]);
        }



    }
}