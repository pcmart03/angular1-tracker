var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('less', function(){
    return gulp.src('./less/styles.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less')],
            filename: "styles.less"
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('concat', function(){
    return gulp.src([
        "./app/app.js",
        "./app/routes/routerHelperProvider.js",
        "./app/services/constants.js",
        "./app/services/search-url-service.js",
        "./app/services/search-service.js",
        "./app/services/item-service.js",
        "./app/services/firebase-services.js",
        "./app/services/calc-services.js",
        "./app/services/date-services.js",
        "./app/controllers/food-log.js",
        "./app/controllers/search.js",
        "./app/controllers/results.js",
        "./app/controllers/item.js",
        "./app/routes/main.routes.js",
        "./app/routes/search.routes.js",
        "./app/routes/item.routes.js",
        "./app/directives/focus.directive.js",
        "./app/directives/date-picker-directive.js"
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

gulp.task('build', ['less', 'concat']);