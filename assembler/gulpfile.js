import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { reset } from './gulp/tasks/reset.js';
import { plugins } from './gulp/config/plugins.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';

global.app = {
    isProd: process.argv.includes('--prod'),
    isDev: !process.argv.includes('--prod'),
    gulp: gulp,
    path: path,
    plugins: plugins,
};

// Основные задачи: scss и js, как и прежде
const mainTasks = gulp.parallel(scss, js);

// Оптимизация watch: следим за SCSS и JS файлами раздельно
const watcher = () => {
    gulp.watch(path.watch.scss, scss); // Следим только за SCSS файлами
    gulp.watch(path.watch.js, js);     // Следим только за JS файлами
};

const dev = gulp.series(reset, mainTasks, watcher);
const prod = gulp.series(reset, mainTasks);

export { dev, prod };

gulp.task('default', dev);
