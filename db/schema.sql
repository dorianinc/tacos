### Schema
-- Drops the tacos_db if it exists currently --
DROP DATABASE IF EXISTS tacos_db;
-- Creates the "tacos_db" database --
CREATE DATABASE tacos_db;
USE tacos_db;

CREATE TABLE tacos
(
	id int NOT NULL AUTO_INCREMENT,
	taco_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

