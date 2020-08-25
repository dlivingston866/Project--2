DROP DATABASE IF EXISTS new_foodsDB;
CREATE database new_foodsDB;
USE new_foodsDB;

CREATE TABLE food5000 (
position INT NOT NULL,
food_type VARCHAR(100) NULL,
food_category VARCHAR(100) NULL,
price DECIMAL (10,4) NULL,
region_oforigin VARCHAR(100) NULL, 
PRIMARY KEY (position)
);

SELECT * FROM food5000;