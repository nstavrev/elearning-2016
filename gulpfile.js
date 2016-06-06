var gulp = require("gulp");

gulp.task("default", function () {
    gulp.src([
        "./node_modules/core-js/client/shim.min.js",
        "./node_modules/zone.js/dist/zone.js",
        "./node_modules/reflect-metadata/Reflect.js",
        "./node_modules/systemjs/dist/system.src.js"
    ]).pipe(gulp.dest("./web/lib"));
})