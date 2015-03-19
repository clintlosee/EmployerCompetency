var gulp = require('gulp');

var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('vet', function() {
    log('Analyzing with JSHint and JSCS');

    return gulp
        .src([
            './routes/*.js'
        ])
        .pipe($.jshint())
        .pipe($.jscs())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'))
        .pipe($.concat('all.js'))
        .pipe($.uglify())
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('test', function() {
    log('Running Mocha tests');

    return gulp
        .src('./test/test.js', {read: false})
        .pipe($.mocha({reporter: 'nyan'}));
});

/////////////////////////

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
