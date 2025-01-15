import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import postcss from 'gulp-postcss';
import sortMediaQueries from 'postcss-sort-media-queries';
import gulpIf from 'gulp-if';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SCSS',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(gulpIf(app.isDev, sourcemaps.init()))
        .pipe(sass({ outputStyle: app.isProd ? 'compressed' : 'expanded' }))

        .pipe(gulpIf(app.isDev, postcss([
            sortMediaQueries()
        ])))

        .pipe(autoprefixer({
            grid: true,
            flexbox: true,
            overrideBrowserslist: ['last 1 version', '> 1%', 'not dead']
        }))
        .pipe(gulpIf(app.isProd, rename({ suffix: "" }))) // .min только для продакшн
        .pipe(gulpIf(app.isDev, sourcemaps.write('./')))
        .pipe(app.gulp.dest(app.path.build.css));
};
