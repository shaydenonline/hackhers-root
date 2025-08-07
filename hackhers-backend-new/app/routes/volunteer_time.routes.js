module.exports = app => {
	const volunteer_times = require("../controllers/volunteer_time.controller.js");
	
	let router = require("express").Router();

	router.post("/", volunteer_times.create);

	//define more routes in this fasion
	//
	app.use('/api/volunteer_times', router);

};
