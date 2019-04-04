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
  start();
});

// function Afterconnection() {
//   connection.query("SELECT * FROM products", function (err, res) {
//     if (err) throw err;
//     console.log(res);
//     connection.end();

//   });
// }

var start = function () {
  inquirer.prompt({
    name: "buyItem",
    type: "rawlist",
    message: "What would you like to [BUY] an item",
    choices: ["YES", "NO"]
  }).then(function (answer) {
    if (answer.buyItem.toUppercase() == "YES") {
      itemList();
    } else {
      // bye!
    }
  })
}
// -Ask them the ID of product they would like to buy
var itemList = function () {
  inquirer.prompt([{
    name: "item",
    type: "input",
    message: "What item would you like to buy?",
    validate: function (value) {
      if (isNaN(value) == false) {
        return true;
      } else {
        return false;
      }
    }
  }]).then(function (answer) {

  })
}

// -how many units of the product they would like to buy




// Check if store has enough of the product to the customer's request
// log phrase "INSUFFICIENT QUANTITY!"

// if store has enough updated remaining quantity
// -update goes through show customer the total cost of their purchase