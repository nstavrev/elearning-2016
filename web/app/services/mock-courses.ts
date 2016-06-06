export var COURSES = [{
    id : "1",
    logo : "https://angular.io/resources/images/logos/angular2/angular.svg",
    name : "Разработка на уеб приложения чрез средствата на Angular2",
    annotation : {
        text : [
            "Курсът запознава студентите със съвременните техники за разработка на web приложения.",
            "Разглежда се по-задълбочено технологията Angular2, разработена от Google.",
            "Курсът е предназванчен за хора с основни познания по JavaScript",
            "Материалът е разпределен равномерно в съразмерни теми",
            "Стартира с базови за технологията концепции и завършва с напреднали техники за пълноценна уеб разработка посредством Angular2"
        ],
        content : [
            {
                text : "Въведение в Angular2"
            },
            {
                text : "Components - Основната градивна единица на всяко Angular2 приложение",
                presentation : "app/services/presentation-1.html",
                exams : [{
                    name : "Упражение 1 - Components",
                    link : "app/services/exam-1-1.html"
                }, {
                    name : "Упражнение 2 - Components",
                    link : "app/services/exam-1-2.html"
                }]
            },
            {
                text : "Databinding - Работа с данни.DOM манипулации.",
                presentation : "app/services/presentation-2.html",
                exams : [{
                    name : "Упражение 1 - Databinding",
                    link : "app/services/exam-2-1.html"
                },{
                    name : "Упражение 2 - Databinding",
                    link : "app/services/exam-2-2.html"
                },{
                    name : "Упражение 3 - Databinding",
                    link : "app/services/exam-2-3.html"
                }]
            },
            {
                text : "Directives - Какво е директива.Как да ги използваме.DOM манипулации чрез директиви."
            },
            {
                text : "Services - Преизползване логиката на приложението.Достъп от различни места.HIERARCHICAL DEPENDENCY INJECTOR."
            },
            {
                text : "Forms - Работа с форми.Валидация"
            },
            {
                text : "Pipes - Транформиране на данни."
            },
            {
                text : "Routing и HTTP"
            }
        ]
    }
}];