CREATE DATABASE hackhers_dev;

USE hackhers_dev;

CREATE TABLE dbParticipants_2025
(
partic_email VARCHAR(64) NOT NULL,
partic_first_name VARCHAR(64) NOT NULL,
partic_last_name VARCHAR(64) NOT NULL,
school ENUM('GSU', 'GT', 'UGA', 'KSU') NOT NULL,
partic_shirt_size ENUM('XS', 'S', 'M', 'L', 'XL', 'XXL') NOT NULL,
ec_name VARCHAR(64) NOT NULL,
ec_phone_number VARCHAR(12) NOT NULL,

experience_para VARCHAR(500) NOT NULL,
goals_para VARCHAR(500) NOT NULL,
established_team ENUM('YES', 'NO', 'SOLO') NOT NULL,
team_members VARCHAR(250) NULL, 
team_id INT NULL,
team_name VARCHAR(64) NULL,

dietary_restrictions VARCHAR(64) NULL,

rsvp BIT NOT NULL DEFAULT 1,
arrived BIT NULL DEFAULT 0,
date_signed_up DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (partic_email)
);

CREATE TABLE Volunteers_2025
(
vol_email VARCHAR(64) NOT NULL,
vol_first_name VARCHAR(64) NOT NULL,
vol_last_name VARCHAR(64) NOT NULL,
phone_number VARCHAR(12) NOT NULL,

vol_shirt_size ENUM('XS', 'S', 'M', 'L', 'XL', 'XXL') NOT NULL,

ec_name VARCHAR(64) NOT NULL,
ec_phone_number VARCHAR(12) NOT NULL,

experience_para VARCHAR(500) NULL,
why_volunteer VARCHAR(500) NOT NULL,

dietary_restrictions VARCHAR(64) NULL,
vol_kind SET('registration_check_in', 'mentoring', 'judging', 'setup_cleanup', 'food_service', 'tech_support', 'photos_videos', 'social_media', 'workshop') NOT NULL,

resume_file_path VARCHAR(128) NULL,
PRIMARY KEY (vol_email)
);

CREATE TABLE Volunteer_availability_2025
(
time_range_id INT AUTO_INCREMENT NOT NULL,
vol_email VARCHAR(64),
start_time DATETIME NOT NULL,
end_time DATETIME NOT NULL,
PRIMARY KEY (time_range_id),
FOREIGN KEY (vol_email) REFERENCES Volunteers_2025(vol_email)
);
