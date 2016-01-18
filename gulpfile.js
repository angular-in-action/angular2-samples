'use strict';

var changed = require('gulp-changed');
var childProcess = require('child_process');
var del = require('del');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var tsd = require('tsd');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var minimist = require('minimist');
var browserSync = require('browser-sync');

var packageJson = require('./package.json');

var spawn = childProcess.spawn;
var server;

var PATHS = {
  lib: [
    'node_modules/systemjs/dist/system.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular/angular.js',
		'node_modules/angular2/bundles/http.dev.js',
		'node_modules/rxjs/bundles/Rx.js',
		'node_modules/es6-shim/es6-shim.js',
    'node_modules/redux/dist/redux.js'
  ],
  client: {
    ts: ['src/**/*.ts'],
    js: ['src/**/*.js'],
    html: 'src/**/*.html',
    css: 'src/**/*.css',
    img: 'src/**/*.{svg,jpg,png,ico}'
  },
  dist: 'dist',
  distClient: 'dist/client',
  distLib: 'dist/lib',
  port: 8080
};

var tsProject = ts.createProject({
  emitDecoratorMetadata: true,
  experimentalDecorators: true,
  declaration: true,
  module: "system",
  rootDir: ".",
  sourceMap: true,
  sourceRoot: ".",
  target: "es5",
  outDir: "../dist",
  moduleResolution: "node",
  noImplicitAny: false,
  typescript: require('typescript')
});

gulp.task('clean', function(done) {
  return del([PATHS.dist], done);
});

gulp.task('libs', function() {
  return gulp
    .src(PATHS.lib)
    .pipe(gulp.dest(PATHS.distLib));
});

gulp.task('ts', function() {
  return gulp
    .src(PATHS.client.ts)
    .pipe(changed(PATHS.distClient, {
      extension: '.js'
    }))
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PATHS.distClient));
});

gulp.task('lint', function () { // https://github.com/palantir/tslint#supported-rules
	return gulp
		.src(PATHS.client.ts)
		.pipe(tslint())
		.pipe(tslint.report('prose', {
			emitError: false
		}));
});

gulp.task('js', function() {
  return gulp
    .src(PATHS.client.js)
    .pipe(changed(PATHS.distClient))
    .pipe(gulp.dest(PATHS.distClient));
});

gulp.task('html', function() {
  return gulp
    .src(PATHS.client.html)
    .pipe(changed(PATHS.distClient))
    .pipe(gulp.dest(PATHS.distClient));
});

gulp.task('css', function() {
  return gulp
    .src(PATHS.client.css)
    .pipe(changed(PATHS.distClient, {
      extension: '.css'
    }))
    .pipe(sourcemaps.init())
    .pipe(concat('app.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PATHS.distClient));
});

gulp.task('img', function() {
  return gulp
    .src(PATHS.client.img)
    .pipe(changed(PATHS.distClient))
    .pipe(gulp.dest(PATHS.distClient));
});

gulp.task('bundle', function(done) {
  runSequence('clean', 'libs', 'lint', 'ts', 'js', 'html', 'css', 'img', done);
});

gulp.task('server:restart', function(done) {
  var started = false;
  if (server) {
    server.kill();
  }
  var args = minimist(process.argv.slice(2), {default: {port: '8080'}});
  server = spawn('node', [packageJson.main, '--port', args.port]);
  server.stdout.on('data', function(data) {
    console.log(data.toString());
    if (started === false) {
      started = true;
      done();
    }
  });
  server.stderr.on('data', function(data) {
    console.error(data.toString());
  });
});

// clean up if an error goes unhandled.
process.on('exit', function() {
  if (server) {
    server.kill();
  }
});

gulp.task('go', ['bundle', 'server:restart', 'browser-sync'], function() {
  gulp.watch(PATHS.client.ts, ['ts']);
  gulp.watch(PATHS.client.js, ['js']);
  gulp.watch(PATHS.client.html, ['html']);
  gulp.watch(PATHS.client.css, ['css']);
  gulp.watch(PATHS.client.img, ['img']);
  gulp.watch(packageJson.main, ['server:restart']);
});

gulp.task('default', ['bundle']);

// Watch for changes in /dist and reload the browser
// from: https://gist.github.com/sogko/b53d33d4f3b40d3b4b2e
// See the gulpfile.js entry
gulp.task('browser-sync', [], function() {
  browserSync.init(null, {
    proxy: "http://localhost:8080",
        files: [PATHS.distClient + "/**/*.*"],
        browser: "google chrome",
        port: 7000,
  });
});

