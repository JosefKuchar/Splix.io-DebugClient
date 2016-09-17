var gulp = require("gulp");
var browserSync = require("browser-sync").create();

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

gulp.task("watch", function() {
  gulp.watch("app/*", ["reload"]);
});

gulp.task("default", ["watch", "browserSync"]);
