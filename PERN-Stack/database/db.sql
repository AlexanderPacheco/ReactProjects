-- Database: perndb
-- DROP DATABASE IF EXISTS perndb;

CREATE DATABASE perndb;
	
USE perndb;
	
CREATE TABLE task(
	id SERIAL PRIMARY KEY,
	title VARCHAR(255) UNIQUE,
	description VARCHAR(255)
);

SELECT * FROM task;


