const Participant = require("../models/participant.model.js");

exports.create = (req, res) => {
	//validate request 
	if (!req.body) {
		res.status(400).send({
			message: "Content shouldn't be empty"});
	}
	const participant = new Participant({
	partic_email: req.body.partic_email,
	partic_first_name: req.body.partic_first_name,
	partic_last_name: req.body.partic_last_name,
	school: req.body.school,
	experience_para: req.body.experience_para,
	established_team: req.body.established_team,
	team_members: req.body.team_members
	});
	Participant.create(participant, (err,data) => {
		console.log('partic_email from if block ${participant.partic_email}')
		if (err)
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the participant."
			});
		else res.send(data);
	});
};


