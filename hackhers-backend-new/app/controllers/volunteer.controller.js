const Volunteer = require("../models/volunteer.model.js");

exports.create = (req, res) => {
	//validate request 
	if (!req.body) {
		res.status(400).send({
			message: "Content shouldn't be empty"});
	}
	const volunteer = new Volunteer({
		vol_email: req.body.vol_email,
		phone_number: req.body.phone_number,
		vol_first_name: req.body.vol_first_name,
		vol_last_name: req.body.vol_last_name,
		vol_shirt_size: req.body.vol_shirt_size,
		vol_kind: req.body.vol_kind,
		ec_name: req.body.ec_name,
		ec_phone_number: req.body.ec_phone_number,
		why_volunteer: req.body.why_volunteer,
		experience_para: req.body.experience_para,
		dietary_restrictions: req.body.dietary_restrictions,
		resume_file_path: req.body.resume_file_path,
	});
	Volunteer.create(volunteer, (err,data) => {
		console.log(`volunteer successfully added: with`)
		if (err)
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the participant."
			});
		else res.send(data);
	});
};


