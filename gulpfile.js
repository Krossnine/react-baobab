"use strict";

var gulp = require("gulp");
var gulpif = require("gulp-if");
var gutil = require("gulp-util");
var source = require("vinyl-source-stream");
var fs = require("fs-extra");
var streamify = require("gulp-streamify");
var browserify = require("browserify");
var reactify = require("reactify");
var uglify = require("gulp-uglify");
var watchify = require("watchify");
var nodemon = require("gulp-nodemon");
var concat = require('gulp-concat');

var config = {
	production : process.env.NODE_ENV === 'production',
	paths : {
		dist : './dist/',
		jsBundleSrc : ['./src/routes/ClientRouter.jsx'],
		jsBundleDest : 'app.js',
    cssFiles : ["./src/**/*.css"],
    cssBundle : "app.css"
	}
};

gulp.task("clean", function(callback) {
	return fs.remove(config.paths.dist, callback);
});

gulp.task("js", function() {

	config.browserify = browserify({
		extension : ["js", "jsx"],
		entries : config.paths.jsBundleSrc,
		transform : [reactify],
		debug : !config.production,
		cache : {},
		packageCache : {},
		noparse : [""],
		fullPaths : !config.production
	});

	config.browserify.run = function() {
		config.browserify.bundle()
				.on('error', gutil.log)
				.pipe(source(config.paths.jsBundleDest))
				.pipe(gulpif(config.production, streamify(uglify())))
				.pipe(gulp.dest(config.paths.dist));
	};

	return config.browserify.run();
});

gulp.task("watch:js", ["js"], function() {
	watchify(config.browserify)
			.on("update", config.browserify.run)
			.on("time", function() {
				gutil.log("Client Javascript :", gutil.colors.yellow("[ Synchronized ]"));
			});
});

gulp.task('css', function () {
  return gulp.src(config.paths.cssFiles)
      .pipe(concat(config.paths.cssBundle))
      .pipe(gulp.dest(config.paths.dist));
});

gulp.task('watch:css', ['css'], function () {
  return gulp.watch(config.paths.cssFiles, ["css"]);
});

gulp.task("vendors", function() {
	return gulp.src([
    'node_modules/bootstrap/dist/**',
    'node_modules/font-awesome/**']
  ).pipe(gulp.dest(config.paths.dist));
});

gulp.task('server-sync', function(/*cb*/) {
	nodemon({
		script : 'index.js',
		ext : 'js jsx',
		quiet : true,
		ignore : ['node_modules/*', 'dist/*']
	}).on("start", function() {
		gutil.log("Server Javascript :", gutil.colors.yellow("[ Synchronized ]"));
	});
});

gulp.task("default", ["vendors", "server-sync", "watch:js", "watch:css"]);
gulp.task("release", ["clean", "vendors", "js", "css"]);
