const conn = require("./db.js");

const Volunteer_time = function(volunteer_time){
	this.vol_email = volunteer_time.vol_email;
	this.start_time = volunteer_time.start_time;
	this.end_time = volunteer_time.end_time;
};

Volunteer_time.create = (newVolunteerTime, result) => {
	let post = {
		vol_email: newVolunteerTime.vol_email,
		start_time: newVolunteerTime.start_time,
		end_time: newVolunteerTime.end_time,
	};

	conn.query('INSERT INTO Volunteer_availability_2025 SET ?', post, (err, res) => {
		if (err) {
			console.log("error when trying to add new volunteer time: ", err);
			result(err, null); //result is a callback function implemented by the mysql npm package. 
			return;
		}
		console.log("created volunteer: ", {...post});
		result(null, {...post});
	});
};
module.exports = Volunteer_time;
