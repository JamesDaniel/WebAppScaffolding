var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('default', function() {
    console.log('hello gulp');
});

gulp.task('less', function() {
    return gulp.src('./bower_components/bootstrap/less/bootstrap.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./bower_components/bootstrap/less/'));
});