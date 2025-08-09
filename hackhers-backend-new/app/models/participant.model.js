const conn = require("./db.js");

const Participant = function(participant){
	this.partic_email = participant.partic_email;
	this.partic_first_name = participant.partic_first_name;
	this.partic_last_name = participant.partic_last_name;
	this.school = participant.school;
	this.partic_shirt_size = participant.partic_shirt_size;
	this.ec_name = participant.ec_name;
	this.ec_phone_number = participant.ec_phone_number;
	this.experience_para = participant.experience_para;
	this.goals_para = participant.goals_para;
	this.established_team = participant.established_team;
	this.team_members = participant.team_members;
	this.team_name = participant.team_name;
	this.dietary_restrictions = participant.dietary_restrictions;
	this.team_id = participant.team_id;
	this.rsvp = participant.rsvp;
	this.arrived = participant.arrived;
	this.date_signed_up = participant.date_signed_up;
};
Participant.getAllEmails = (result) => {
  conn.query("SELECT partic_email FROM dbParticipants_2025", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("participant emails: ", res);
    result(null, res);
  });
};
Participant.create = (newParticipant, result) => {
	let post = {
		partic_email: newParticipant.partic_email, 
		partic_first_name: newParticipant.partic_first_name,
		partic_last_name: newParticipant.partic_last_name,
		school: newParticipant.school,
		partic_shirt_size: newParticipant.partic_shirt_size,
		ec_name: newParticipant.ec_name,
		ec_phone_number: newParticipant.ec_phone_number,
		experience_para: newParticipant.experience_para,
		goals_para: newParticipant.goals_para,
		established_team: newParticipant.established_team,
		team_members: newParticipant.team_members,
		team_name: newParticipant.team_name,
		dietary_restrictions: newParticipant.dietary_restrictions,
		team_id: newParticipant.team_id,
	};

	conn.query('INSERT INTO dbParticipants_2025 SET ?', post, (err, res) => {
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
