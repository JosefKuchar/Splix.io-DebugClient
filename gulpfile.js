var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var download = require("gulp-download");

gulp.task("webserver", function() {
  gulp.src("app")
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      fallback: "index.html",
    }));
});

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "app"
    },
  })
});


gulp.task("reload", function() {
  return gulp.src("app/*")
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task("download", function() {
  return download("http://splix.io/json/servers.json")
    .pipe(gulp.dest("app"))
});

gulp.task("watch", function() {
  gulp.watch("app/*", ["reload"]);
});

gulp.task("default", ["watch", "download", "browserSync"]);
