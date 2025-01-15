import webpack from "webpack-stream";
import named from "vinyl-named";
import TerserPlugin from 'terser-webpack-plugin';

export const js = () => {
    return app.gulp.src(app.path.src.js)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'JS',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(named())
        .pipe(webpack({
            mode: app.isProd ? 'production' : 'development',
            optimization: {
                minimize: app.isProd,
                minimizer: [new TerserPlugin()],
            },
            output: {
                filename: app.isProd ? '[name].js' : '[name].js', // .min только для продакшн
            },
            devtool: app.isDev ? 'source-map' : false,
        }))
        .pipe(app.gulp.dest(app.path.build.js));
};
