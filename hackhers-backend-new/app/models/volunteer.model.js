const conn = require("./db.js");

const Volunteer = function(volunteer){
	this.vol_email = volunteer.vol_email;
	this.phone_number = volunteer.phone_number;
	this.vol_first_name = volunteer.vol_first_name;
	this.vol_last_name = volunteer.vol_last_name;
	this.vol_shirt_size = volunteer.vol_shirt_size;
	this.vol_kind = volunteer.vol_kind;
	this.ec_name = volunteer.ec_name;
	this.ec_phone_number = volunteer.ec_phone_number;
	this.why_volunteer = volunteer.why_volunteer;
	this.experience_para = volunteer.experience_para;
	this.dietary_restrictions = volunteer.dietary_restrictions;
	this.resume_file_path = volunteer.resume_file_path;
};

Volunteer.create = (newVolunteer, result) => {
	let post = {
		vol_email: newVolunteer.vol_email,
		phone_number: newVolunteer.phone_number,
		vol_first_name: newVolunteer.vol_first_name,
		vol_last_name: newVolunteer.vol_last_name,
		vol_shirt_size: newVolunteer.vol_shirt_size,
		vol_kind: newVolunteer.vol_kind,
		ec_name: newVolunteer.ec_name,
		ec_phone_number: newVolunteer.ec_phone_number,
		why_Volunteer: newVolunteer.why_volunteer,
		experience_para: newVolunteer.experience_para,
		dietary_restrictions: newVolunteer.dietary_restrictions,
		resume_file_path: newVolunteer.resume_file_path,
	};

	conn.query('INSERT INTO Volunteers_2025 SET ?', post, (err, res) => {
		if (err) {
			console.log("error when trying to add new volunteer: ", err);
			result(err, null); //result is a callback function implemented by the mysql npm package. 
			return;
		}
		console.log("created volunteer: ", {...post});
		result(null, {...post});
	});
};
module.exports = Volunteer;
