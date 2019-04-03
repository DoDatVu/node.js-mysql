// Create a MySQL Database/connection called bamazon
var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "scamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id" + connection.threadId);
  Afterconnection();
});

function Afterconnection() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();

  });
}


// Create a Node Application called "bamazonCustomer.js"
// App prompt users 2 messages
// -Ask them the ID of product they would like to buy
// -how many units of the product they would like to buy

// Check if store has enough of the product to the customer's request
// log phrase "INSUFFICIENT QUANTITY!"

// if store has enough updated remaining quantity
// -update goes through show customer the total cost of their purchase