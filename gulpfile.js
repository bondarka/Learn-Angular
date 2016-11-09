var gulp = require("gulp");
var clean = require("gulp-clean");
var htmlmin = require("gulp-htmlmin");
var less = require("gulp-less");
var concat = require("gulp-concat")
var autoprefixer = require("gulp-autoprefixer")
var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
// var spritesmith = require("gulp.spritesmith");
var rigger = require('gulp-rigger');
var pageres = require("pageres");
var browserSync = require('browser-sync').create();


gulp.task("clean", [], function() {
    return gulp.src("dist")
        .pipe(clean());
})

// gulp.task("sprites", [], function() {

//     var spriteOutput = gulp.src(["./sprites/*.png"])
//         .pipe(spritesmith({
//             imgName: 'sprite.png',
//             cssName: 'sprite.less',
//             imgPath: '../img/sprite.png'
//         }));
//     spriteOutput.css.pipe(gulp.dest("./css"));
//     spriteOutput.img.pipe(gulp.dest("./img"));
// })


gulp.task("html", [], function() {
    return gulp.src("views/*.html")
        .pipe(rigger())
        .pipe(gulp.dest("dist"));
})

gulp.task("fonts", [], function() {
    return gulp.src("fonts/**")
        .pipe(gulp.dest("dist/fonts"));
})


gulp.task("images", [], function() {
    return gulp.src(["images/*.png","images/*.jpg", "images/*.gif", "images/*.ico"])
        .pipe(gulp.dest("dist/images"))
        .pipe(browserSync.stream());
})
gulp.task("styles", [], function() {
    return gulp.src("css/style.less")
        .pipe(plumber({
            "errorHandler": function(err) {
                // console.log(err["message"]);
                var args = Array.prototype.slice.call(arguments);
                notify.onError({ "title": "Error", "message": err["message"] }).apply(this, args);
                this.emit("end");
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream())
        .pipe(notify("Styles rebilde"));
})


gulp.task("js", [], function() {
    return gulp.src("js/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream())
})

gulp.task("vendor", [], function() {
    return gulp.src([
            "vendor/*.min.js"
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest("dist/js"))
})

gulp.task("serve", [], function() {

    browserSync.init({
        server: {
            baseDir: './dist'
        },
        browser: "chrome",
        notify: false
    });
     gulp.watch("./dist/binding.html").on("change", browserSync.reload);

})

// gulp.task("open", [], function() {
//     var options = {
//         uri: "http://localhost:5000",
//         app: "chrome"
//     };
//     gulp.src('.')
//         .pipe(open(options))
// })

gulp.task("shots",[],function(){
    var p = new pageres({delay:2})
    .src("http://localhost:5000",['480x320', '1024x768', 'iphone 5s'])
    .dest("screens")
    .run()
    .then(function(){
        console.log("done")
    });
})

gulp.task("default", ["clean"], function() {
    gulp.run("html");
    gulp.run("images");
    gulp.run("fonts");
    gulp.run("styles");
    gulp.run("js");
    gulp.run("vendor");
    gulp.run("serve");
    // gulp.run("sprites");

    gulp.watch("views/**/*.html", ['html']);
    gulp.watch("css/*.less", ['styles']);
    gulp.watch("js/*.js", ['js']);
    // gulp.watch("sprites/**", ['sprites']);
    gulp.watch("images/**", ['images']);



});
