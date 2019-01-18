-- Create the database burgers_db and specified it for use.
CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(200) NOT NULL,
  devoured BOOLEAN NOT NULL default 0,
  PRIMARY KEY (id)
);