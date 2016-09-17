Package.describe({
  name: 'andyhan:jszip',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'This is just a meteor wrapper for the npm package jszip.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/AndyHan1001/meteor-jszip.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

// declare npm modules for meteor to download into .npm/package
Npm.depends({
  'jszip': '3.1.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use('cosmos:browserify@0.10.0', 'client');

  api.addFiles('app.browserify.js');

  api.export('JSZip');
});
