### Schema

CREATE DATABASE mental_app_db;

USE mental_app_db;

CREATE TABLE users
(
  id int NOT NULL AUTO_INCREMENT,
  user_name varchar (100) NOT NUll,
  -- password varchar (50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE activities
(
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  activity_id int NOT NULL,
  was_accepted BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);



### Seeds

-- INSERT INTO users (user_name) VALUES ("Gail")
INSERT INTO Users (user_name) VALUES ("Gail");
INSERT INTO Users (user_name) VALUES ("Mario Bros.");
INSERT INTO Users (user_name) VALUES ("Larry David");
INSERT INTO Users (user_name) VALUES ("Oprah");
INSERT INTO Users (user_name) VALUES ("Dr.Oz");

-- INSERT INTO events (event_id, was_accepted)
INSERT INTO Activities (activity_id, was_accepted) VALUES (1, 1);
INSERT INTO Activities (activity_id, was_accepted) VALUES (2, 1);
INSERT INTO Activities (activity_id, was_accepted) VALUES (3, 1);
INSERT INTO Activities (activity_id, was_accepted) VALUES (4, 0);
INSERT INTO Activities (activity_id, was_accepted) VALUES (5, 1);
INSERT INTO Activities (activity_id, was_accepted) VALUES (6, 0);
