const Sequelize = require('sequelize'); //sql database


module.exports = {Tags};

//database initialisation
const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});
	
const Tags = sequelize.define('tags', {
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
		usage_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
		},
});
