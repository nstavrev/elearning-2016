"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var mock_courses_1 = require("./services/mock-courses");
var CourseComponent = (function () {
    function CourseComponent(params, router) {
        this.isIntroVisible = true;
        this.areLecturesVisible = false;
        this.course = mock_courses_1.COURSES.find(function (course) {
            return course.id == params.get("id");
        });
        if (this.course == undefined) {
            router.navigate(["Home"]);
        }
    }
    CourseComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.collapsible').collapsible({
                accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
            });
        });
    };
    CourseComponent.prototype.showIntro = function () {
        if (this.isIntroVisible) {
            this.isIntroVisible = false;
        }
        else {
            this.isIntroVisible = true;
        }
        this.areLecturesVisible = false;
    };
    CourseComponent.prototype.showLectures = function () {
        if (this.areLecturesVisible) {
            this.areLecturesVisible = false;
        }
        else {
            this.areLecturesVisible = true;
        }
        this.isIntroVisible = false;
    };
    CourseComponent = __decorate([
        core_1.Component({
            selector: 'course',
            templateUrl: "app/course.html"
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], CourseComponent);
    return CourseComponent;
}());
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map