
module.exports = {
	name: 'API',
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3100,
	base_url: process.env.BASE_URL || `http://localhost:${process.env.PORT}`,
	db: {
		uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/devc',
	},
};