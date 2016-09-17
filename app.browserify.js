if (Meteor.isServer) {
	JSZip = Npm.require('jszip');
} else {
	JSZip = require('jszip');
}