const gulp = require("gulp");
const rigger = require("gulp-rigger");
const rename = require("gulp-rename");

gulp.task("default", () => {
	gulp
      .src("src/*.js")
      .pipe(rigger())
      .pipe(rename({ basename: "glottologist" }))
      .pipe(gulp.dest("dist"));
});