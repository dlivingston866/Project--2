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

INSERT INTO newfoods (id, title, category, cost) VALUES ('1', 'tempeh', "vegan", '4');
INSERT INTO newfoods (id, title, category, cost) VALUES ('2', 'sushi', "fish", '20');

LOAD DATA INFILE '/public/foods.csv'
INTO TABLE newfoods
FIELDS TERMINATED BY ','
ENCLOSED BY ' " '
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;



