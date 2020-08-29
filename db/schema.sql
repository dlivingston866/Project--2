DROP DATABASE IF EXISTS new_foodsDB;
CREATE database new_foodsDB;
USE new_foodsDB;

CREATE TABLE newfoods (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (255) NULL,
    category VARCHAR (255) NOT NULL,
    cost INT NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM new_foodsDB.newfoods;