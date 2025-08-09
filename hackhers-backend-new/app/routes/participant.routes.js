module.exports = app => {
	const participants = require("../controllers/participant.controller.js");
	
	let router = require("express").Router();

	router.post("/", participants.create);
	router.get("/", participants.getAllEmails);
	//define more routes in this fasion
	//
	app.use('/api/participants', router);

};
