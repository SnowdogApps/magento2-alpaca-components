const autoprefixer = require('autoprefixer'),
      fractal      = require('@frctl/fractal').create(),
      fs           = require('fs'),
      gulp         = require('gulp'),
      mandelbrot   = require('@frctl/mandelbrot'),
      plumber      = require('gulp-plumber'),
      postcss      = require('gulp-postcss'),
      sass         = require('gulp-sass'),
      sourcemaps   = require('gulp-sourcemaps');

const processors = [
    autoprefixer()
];

const paths = {
    css: 'public/css',
    maps: 'cssmaps'
}

// Fractal configuration
fractal.set('project.title', 'magento2-ui-components'); // title for the project
fractal.web.set('static.path', `${__dirname}/public`);
fractal.web.set('builder.dest', 'build'); // destination for the static export
fractal.docs.set('path', `${__dirname}/docs`); // location of the documentation directory.
fractal.components.set('path', `${__dirname}/components`); // location of the component directory.

fractal.web.theme(
    mandelbrot({
        skin: "black"
    })
);

const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

// get handlebars component engine (default) and register partial
const hbsEngine = fractal.components.engine();

hbsEngine.handlebars.registerHelper('pager', function (context, options) {
    var ret = "";

    function findIndexByActive(source, active) {
        for (var i = 0; i < source.length; i++) {
            if (source[i].active === active) {
                return i;
            }
        }
    }

    if (context.length > 6) {
        var result = findIndexByActive(context, true),
            arrayLength = context.length,
            newContext = new Array(),
            middlePage = {
                pageNo: '...',
                active: false
            };

        if ((arrayLength - result) > 6) {

            for (var k = result; k < (result + 3); k++) {
                newContext.push(context[k])
            }
            newContext.push(middlePage);
            newContext.push(context[(context.length - 2)], context[(context.length - 1)]);

            for (var i = 0, j = newContext.length; i < j; i++) {
                ret = ret + options.fn(newContext[i]);
            }

        } else {
            for (var k = result; k < (result + 5); k++) {
                newContext.push(context[k]);
            }

            for (var i = 0, j = newContext.length; i < j; i++) {
                ret = ret + options.fn(newContext[i]);
            }
        }
    } else {
        for (var i = 0, j = context.length; i < j; i++) {
            ret = ret + options.fn(context[i]);
        }
    }

    return ret;
});

hbsEngine.handlebars.registerHelper("lastActive", function (array) {
    var last = array[array.length - 1];
    return last.active;
});

hbsEngine.handlebars.registerHelper('tabList', function (context, options) {
    var ret = '<ul class="tabs__list">';

    for (var i = 0, j = context.length; i < j; i++) {
        ret = ret + '<li class="tabs__list-item">' + options.fn(context[i]) + "</li>";
    }

    return ret + "</ul>";
});

hbsEngine.handlebars.registerHelper('jsPath', function (componentName) {
  return '/components/raw/' + componentName + '/' + componentName + '.js';
});

hbsEngine.handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

hbsEngine.handlebars.registerHelper('libs', file => `/components/raw/libs/${file}`);

hbsEngine.handlebars.registerHelper('inline', src => fs.readFileSync(src, 'utf8'));

// Fractal gulp tasks

gulp.task('fractal:start', ['sass', 'watch'], () => {
    const server = fractal.web.server({
        sync: true,
        port: 4000
    });
    server.on('error', err => logger.error(err.message));

    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}`);
    });
});

gulp.task('fractal:build', ['sass'], () => {
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));

    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});

// Gulp tasks

gulp.task('watch', () => {
    gulp.watch('**/*.scss', event => {
        gulp.src('docs/styles.scss')
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(postcss(processors))
            .pipe(sourcemaps.write(paths.maps))
            .pipe(gulp.dest(paths.css))
    })
});

gulp.task('sass', () => {
    gulp.src('docs/styles.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write(paths.maps))
        .pipe(gulp.dest(paths.css))
});
