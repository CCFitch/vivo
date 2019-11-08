const gulp = require('gulp')
const concat = require('gulp-concat')
const minifyHtml = require('gulp-minify-html')
const uglify = require('gulp-uglify')
const minifyCss = require('gulp-minify-css')
const rename = require('gulp-rename')
const imagemin = require('gulp-imagemin')
const connect = require('gulp-connect')
const sass = require('gulp-sass')
// const reload = require('gulp-load-plugins')

gulp.task('sass',function (){
    return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
});

//合并css 压缩css
gulp.task('concat1',function(){
    return gulp.src(['css/*.css'])
    .pipe(concat('main.css'))
    .pipe(connect.reload())
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload())
})
//合并js 压缩js
gulp.task('concat2',function(){
    return gulp.src(['./js/*.js','!./js/jquery*.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload())
})
//压缩html
gulp.task('minifyHtml',function(){
    return gulp.src('./index.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload())
})
//压缩图片
gulp.task('imagemin',function(){
    return gulp.src('./images/*.*')
    .pipe(imagemin(
    // [// 压缩图片 >3 版本
    //     imagemin.gifsicle({interlaced: true}),
    //     imagemin.jpegtran({progressive: true}),
    //     imagemin.optipng({optimizationLevel: 5}),
    //     imagemin.svgo({
    //         plugins: [
    //             {removeViewBox: true},
    //             {cleanupIDs: false}
    //         ]
    //     })
    // ]
    ))
    .pipe(gulp.dest('./dist/images/'))
    .pipe(connect.reload())
})
//重命名
gulp.task('rename',function(){
    
})
//创建监听
gulp.task('watch',function(){
    gulp.watch('./css/*.css',gulp.series('concat1'))
    gulp.watch('./js/*.js',gulp.series('concat2'))
    gulp.watch('./*.html',gulp.series('minifyHtml'))
    gulp.watch('./images/*.*',gulp.series('imagemin'))
    gulp.watch('./sass/*.scss',gulp.series('sass'));
})
//自动加载
gulp.task('reload',function(done){
    connect.server({
        // root: './dist',//根目录
        // ip:'192.168.11.62',//默认localhost:8080
        livereload: true,//自动更新 //其他参数可以省略
        // port: 9999//端口
    })
    done();//执行回调，表示这个异步任务已经完成，这样会执行下个任务
})
//运行 必须在默认的localhost:8080之下运行！！
gulp.task('run',gulp.series('reload','watch'))

//打包一块执行
gulp.task('build',gulp.parallel(
    gulp.series('sass'),
    gulp.series('concat1'),
    gulp.series('concat2'),
    gulp.series('minifyHtml'),
    gulp.series('imagemin')
))
