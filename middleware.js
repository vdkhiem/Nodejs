// Use module exports to expose middleware

var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next) {
		// new Date().toString();
		console.log(req.method + ' ' + req.originalUrl + ' ' + new Date().toString());
		next();
	}
};

module.exports = middleware; //This is to be exposed