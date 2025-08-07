module.exports = app => {
	const volunteers = require("../controllers/volunteer.controller.js");
	
	let router = require("express").Router();

	router.post("/", volunteers.create);

	//define more routes in this fasion
	//
	app.use('/api/volunteers', router);

};
