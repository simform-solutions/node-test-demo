
const _ = require('lodash');
const glob = require('glob');
// Get unique error field name
// Get files by glob patterns

exports.getGlobbedPaths = (globPatterns, excludes) => {
  // URL paths regex
  // eslint-disable-next-line
  const urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i');

  // The output array
  let output = [];

  // If glob pattern is array then we use each pattern in a recursive way, otherwise we use glob
  if (_.isArray(globPatterns)) {
    globPatterns.foeEach((globPattern) => {
      // eslint-disable-next-line
      output = _.union(output, getGlobbedPaths(globPattern, excludes));
    });
  } else if (_.isString(globPatterns)) {
    if (urlRegex.test(globPatterns)) {
      output.push(globPatterns);
    } else {
      let files = glob.sync(globPatterns);
      if (excludes) {
        files = files.map((file) => {
          let newFile;
          if (_.isArray(excludes)) {
            // eslint-disable-next-line
            for (let i in excludes) {
              newFile = file.replace(excludes[i], '');
            }
          } else {
            newFile = file.replace(excludes, '');
          }
          return newFile;
        });
      }
      output = _.union(output, files);
    }
  }

  return output;
};
