var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var fs = require('fs');
var path = require('path');
var url = require('url');
gulp.task('minsass', function() {
    return gulp.src('./public/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
});
gulp.task('watch', function() {
    return gulp.watch('./public/sass/*.scss', gulp.series('minsass'))
});

gulp.task('uglify', function() {
    return gulp.src('./public/js/*.js')
        .pipe(babel({
            presets: "es2015"
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./newjs'))
});
gulp.task('webserver', function() {
    return gulp.src('./public')
        .pipe(server({
            port: 3000,
            open: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return res.end();
                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, "public", pathname)));
                }
            }
        }))
})
gulp.task('dev', gulp.series('minsass', 'webserver', 'watch'));

gulp.task('build', gulp.series('uglify'));