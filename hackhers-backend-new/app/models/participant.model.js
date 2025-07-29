const conn = require("./db.js");

const Participant = function(participant){
	this.partic_email = participant.partic_email;
	this.partic_first_name = participant.partic_first_name;
	this.partic_last_name = participant.partic_last_name;
	this.school = participant.school;
	this.experience_para = participant.experience_para;
	this.established_team = participant.established_team;
	this.team_members = participant.team_members;
	this.team_id = participant.team_id;
	this.rsvp = participant.rsvp;
	this.arrived = participant.arrived;
	this.date_signed_up = participant.date_signed_up;
};

Participant.create = (newParticipant, result) => {
	let post = {
		partic_email: newParticipant.partic_email, 
		partic_first_name: newParticipant.partic_first_name,
		partic_last_name: newParticipant.partic_last_name,
		school: newParticipant.school,
		experience_para: newParticipant.experience_para,
		established_team: newParticipant.established_team,
		team_members: newParticipant.team_members,
		team_id: newParticipant.team_id,
	};

	conn.query('INSERT INTO Participants_2025 SET ?', post, (err, res) => {
		if (err) {
			console.log("error when trying to add new participant: ", err);
			result(err, null); //result is a callback function implemented by the mysql npm package. 
			return;
		}
		console.log("created participant: ", {...post});
		result(null, {...post});
	});
};
module.exports = Participant;
