const Volunteer_time = require("../models/volunteer_time.model.js");

exports.create = (req, res) => {
	//validate request 
	if (!req.body) {
		res.status(400).send({
			message: "Content shouldn't be empty"});
	}
	const volunteer_time = new Volunteer_time({
		vol_email: req.body.vol_email,
		start_time: req.body.start_time,
		end_time: req.body.end_time,
	});
	Volunteer_time.create(volunteer_time, (err,data) => {
		if (err)
			res.status(500).send({
				message:
					err.message || "Some error occurred while adding volunteer time."
			});
		else res.send(data);
	});
};


