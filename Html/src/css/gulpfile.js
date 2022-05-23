const{src,dest,watch,series}=require('gulp')
const sass=require('gulp-sass')(require('sass'))

function buildStyles()
{
    return src('main.scss')
    .pipe(sass())
    .pipe(dest(css))
}