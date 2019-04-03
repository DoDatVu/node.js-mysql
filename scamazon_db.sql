drop database if exists scamazon_db;
create database scamazon_db;
use scamazon_db;

-- create product table --
CREATE TABLE products (
item_id integer (10)  AUTO_INCREMENT NOT NULL,
product_name varchar (50) not null,
department_name varchar (50) not null,
price_name integer (10) not null,
stock_quantity integer (10) not null,
primary Key(item_id)
);

-- 10 different items--
INSERT INTO products (product_name, department_name, price_name, stock_quantity)
value ("Sambung TV", "Electronic", 500, 150),
 ("cocaine", "Vitamins", 420, 69),
 ("placestation", "Electronic", 300, 300),
 ("Guchi belt", "Clothing", 800, 50),
 ("Bay Ran Glasses", "Electronic", 100, 600),
 ("Pinapple Watch", "Electronic", 450, 200),
 ("Rolax", "electronic", 5000, 10),
 ("CrackBook Air", "electronic", 1000, 350),
 ("Bindows laptop", "electronic", 900, 100),
 ("weighted blanket", "electronic", 80, 800);

SELECT * FROM products;
