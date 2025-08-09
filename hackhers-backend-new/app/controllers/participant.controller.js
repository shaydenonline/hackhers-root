const Participant = require("../models/participant.model.js");

exports.create = (req, res) => {
	//validate request 
	console.log("Tried to add this req.body", req.body);
	if (!req.body) {
		res.status(400).send({
			message: "Content shouldn't be empty"});
	}
	const participant = new Participant({
		partic_email: req.body.partic_email,
		partic_first_name: req.body.partic_first_name,
		partic_last_name: req.body.partic_last_name,
		school: req.body.school,
		partic_shirt_size: req.body.partic_shirt_size,
		ec_name: req.body.ec_name,
		ec_phone_number: req.body.ec_phone_number,
		experience_para: req.body.experience_para,
		goals_para: req.body.goals_para,
		established_team: req.body.established_team,
		team_members: req.body.team_members,
		team_name: req.body.team_name,
		dietary_restrictions: req.body.dietary_restrictions,
	});
	Participant.create(participant, (err,data) => {
		console.log(`partic_email changed from if block ${participant.partic_email}`)
		if (err)
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the participant."
			});
		else res.send(data);
	});
};



exports.getAllEmails = (req, res) => {

  Participant.getAllEmails((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};


