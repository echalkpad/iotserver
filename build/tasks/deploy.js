var gulp = require('gulp');
var runSequence = require('run-sequence');

// calls the listed sequence of tasks in order
gulp.task('deploy', function(callback){
  return runSequence(
    'build',
    'unbundle',
    'bundle',
    callback
  );
});