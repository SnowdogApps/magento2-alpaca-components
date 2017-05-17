const autoprefixer = require('autoprefixer'),
      eslint       = require('gulp-eslint'),
      fractal      = require('@frctl/fractal').create(),
      fs           = require('fs'),
      gulp         = require('gulp'),
      gulpif       = require('gulp-if'),
      mandelbrot   = require('@frctl/mandelbrot'),
      notify       = require('gulp-notify'),
      plumber      = require('gulp-plumber'),
      postcss      = require('gulp-postcss'),
      reporter     = require('postcss-reporter'),
      runSequence  = require('run-sequence'),
      sass         = require('gulp-sass'),
      sassError    = require('gulp-sass-error'),
      sassLint     = require('gulp-sass-lint'),
      sourcemaps   = require('gulp-sourcemaps'),
      stylelint    = require('stylelint'),
      svgSprite    = require('gulp-svg-sprite'),
      util         = require('gulp-util');

const processors = [
  autoprefixer()
];

const paths = {
  components: 'components',
  css       : 'public/css',
  icons     : 'components/general/icons/files',
  maps      : 'cssmaps',
  sass      : 'docs/styles.scss'
}

// Fractal configuration
fractal.set('project.title', 'magento2-ui-components'); // title for the project
fractal.web.set('static.path', `${__dirname}/public`);
fractal.web.set('builder.dest', 'build'); // destination for the static export
fractal.docs.set('path', `${__dirname}/docs`); // location of the documentation directory.
fractal.components.set('path', `${__dirname}/components`); // location of the component directory.

fractal.web.theme(
  mandelbrot({
    skin: 'black'
  })
);

const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

// get handlebars component engine (default) and register partial
const hbsEngine = fractal.components.engine();

hbsEngine.handlebars.registerHelper('jsPath', function (componentName) {
  return '/components/raw/' + componentName + '/' + componentName + '.js';
});

hbsEngine.handlebars.registerHelper('libs', file => `/components/raw/libs/${file}`);

hbsEngine.handlebars.registerHelper('inline', src => fs.readFileSync(src, 'utf8'));

// Fractal gulp tasks
gulp.task('fractal:start', ['icons', 'sass', 'watch'], () => {
  const server = fractal.web.server({
    sync: true,
    port: 4000
  });
  server.on('error', err => logger.error(err.message));

  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  });
});

gulp.task('fractal:build', ['icons', 'sass'], () => {
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => {
    return logger.update(`Exported ${completed} of ${total} items`, 'info');
  });
  builder.on('error', err => logger.error(err.message));

  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
});

// Gulp tasks
gulp.task('watch', () => {
  gulp.watch('**/*.scss', () => {
    runSequence('sass', 'sass-lint', 'css-lint');
  })
});

gulp.task('sass', () => {
  gulp.src('docs/styles.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write(paths.maps))
    .pipe(gulp.dest(paths.css))
});

gulp.task('sass-lint', () => {
  return gulp.src(paths.components + '/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(gulpif(util.env.ci, sassLint.failOnError()));
});

gulp.task('css-lint', () => {
  return gulp.src(paths.css + '/**/*.css')
    .pipe(postcss([
      stylelint(),
      reporter({
        throwError: util.env.ci || false
      })
    ]));
});

gulp.task('js-lint', () => {
  return gulp.src(paths.components + '/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulpif(util.env.ci, eslint.failAfterError()));
});

gulp.task('icons', () => {
  return gulp.src(paths.icons + '/*.svg')
    .pipe(svgSprite({
      mode: {
        symbol: {
          inline: true,
          dest: 'images',
          sprite: 'icons-sprite.svg'
        }
      }
    }))
    .pipe(gulp.dest('public'));
});
