// Paths for source and distribution files
const paths = {
  src: {
    scss: 'src/scss/**/*.scss',
    js: 'src/scripts/**/*.js',
    html: 'src/**/*.html',
    htmlElements: 'src/elements/**/*.html',
    images: 'src/images/*',
    fonts: 'src/fonts/*.*',
    libraries: 'src/libraries',
  },
  dist: {
    css: 'dist/assets/css',
    js: 'dist/assets/js',
    html: 'dist',
    images: 'dist/assets/images',
    fonts: 'dist/assets/fonts',
  },
};

export const librariesArr = [
  {
    name: 'Splide',
    css: [`${paths.src.libraries}/splide/css/splide-core.min.css`],
    js: [`${paths.src.libraries}/splide/js/splide.min.js`]
  },
]

export default paths;
