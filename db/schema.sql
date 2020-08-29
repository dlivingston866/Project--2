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

LOAD DATA INFILE 'c:/tmp/foods.csv'
INTO TABLE newfoods
FIELDS TERMINATED BY ','
ENCLOSED BY ' " '
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;





