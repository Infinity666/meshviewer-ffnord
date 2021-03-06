module.exports = function (gulp, plugins, config) {
  return function copy() {
    gulp.src(['html/*.html', 'assets/favicon/*'])
      .pipe(gulp.dest(config.build));
    gulp.src(['assets/logo.svg'])
      .pipe(gulp.dest(config.build));
    gulp.src(['node_modules/promise-polyfill/promise.js', 'polyfill.js', 'node_modules/raven-js/dist/raven.js'])
      .pipe(gulp.dest(config.build + '/vendor'));
    return gulp.src(['assets/fonts/*', 'assets/icons/fonts/*'])
      .pipe(gulp.dest(config.build + '/fonts'));
  };
};

