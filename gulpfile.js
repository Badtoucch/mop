const gulp   		 = require('gulp');
const browserSync    = require('browser-sync');
const sass   		 = require('gulp-sass');
const concat 		 = require('gulp-concat');
const autoprefixer   = require('gulp-autoprefixer');
const sourcemaps     = require('gulp-sourcemaps');
const cleanCSS   	 = require('gulp-clean-css');
const include     	 = require('gulp-include');
const plumber     	 = require('gulp-plumber');
const del     		 = require('del');
const mmq        = require('gulp-merge-media-queries');
let path = {
	src: {
		html: 'app/*.html',
		style: 'app/style/main.sass',
		scripts: 'app/js/**/*.js',
		img: 'app/img/*.+(jpg|jpeg|png|svg|ico|gif)',
		fonts: 'app/fonts/**/*',
		localization: "app/localization/*.json"
	},
	build: {
		html: 'build',
		style: 'build/css',
		scripts: 'build/js',
		img: 'build/img',
		fonts: 'build/fonts',
		localization: "build/localization"
	},
	watch: {
		htmlApp: 'app/*.html',
		html: 'app/**/*.html',
		style: 'app/**/*.+(sass|scss)',
		scripts: 'app/**/*.js',
		img: 'app/img/*.+(jpg|jpeg|png|svg|ico|gif)',
		fonts: 'app/fonts/**/*'
	}
};

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'build'
		},
		notify: false,
		tunnel: false,
		port: 8000,
  		host: "localhost"
	});
});

gulp.task('html', function() {
	return gulp.src(path.src.html)
		.pipe(include())
		.pipe(gulp.dest(path.build.html))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('style', function(){
	return gulp.src(path.src.style)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(concat('main.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false 
		}))
		.pipe(mmq({
			log: false
		}))
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.style))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function() {
	return gulp.src(path.src.scripts)
		.pipe(sourcemaps.init())
		.pipe(include())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.scripts))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function() {
	return gulp.src(path.src.img)
	  	.pipe(gulp.dest(path.build.img))
	  	.pipe(browserSync.reload({stream: true}));
});

gulp.task('fonts', function() {
	return gulp.src(path.src.fonts)
	  	.pipe(gulp.dest(path.build.fonts))
	  	.pipe(browserSync.reload({stream: true}));
});

gulp.task('localization', function() {
	return gulp.src(path.src.localization)
		.pipe(include())
		.pipe(gulp.dest(path.build.localization))
});

gulp.task('deploy:style', function(){
	return gulp.src(path.src.style)
		.pipe(sass())
		.pipe(concat('main.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false 
		}))
		.pipe(mmq({
			log: false
		}))
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(gulp.dest(path.build.style))
});

gulp.task('deploy:scripts', function() {
	return gulp.src(path.src.scripts)
		.pipe(include())
		.pipe(gulp.dest(path.build.scripts))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('clean', function() {
	return del.sync('build/*')
});

gulp.task('watch', ['clean','browser-sync', 'html', 'style', 'scripts', 'img', 'fonts'], function() {
	gulp.watch([path.watch.html, path.watch.htmlApp], ['html']);
	gulp.watch([path.watch.style], ['style']);
	gulp.watch([path.watch.img], ['img']);
	gulp.watch([path.watch.scripts], ['scripts']);
	gulp.watch([path.watch.fonts], ['fonts']);
});

gulp.task('deploy', ['clean', 'html', 'deploy:style', 'deploy:scripts', 'img', 'fonts', 'localization']);

gulp.task('default', ['watch']);