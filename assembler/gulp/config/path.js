import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = '../assets',
    srcFolder = './src';

    export const path = {
        build: {
            css: `${buildFolder}/css/`,
            js: `${buildFolder}/js/`,
            files: `${buildFolder}`
        },
        src: {
           
            scss: [`${srcFolder}/scss/main.scss`, `${srcFolder}/scss/posts.scss`],  // добавляем home.scss
            js: [`${srcFolder}/js/main.js`],             // добавляем home.js
            files: `${srcFolder}/**/*.*`,
        },
        watch: {
            scss: `${srcFolder}/scss/**/*.scss`,
            js: `${srcFolder}/js/**/*.js`
        },
        clean:  [`${buildFolder}/css/*`, `${buildFolder}/js/*`],
        buildFolder: buildFolder,
        srcFolder: srcFolder,
        rootFolder: rootFolder,
    };
     
