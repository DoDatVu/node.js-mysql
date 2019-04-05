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
 // -Ask them the ID of product they would like to buy
var start = function () {
    connection.query("SELECT * FROM products", function (err, res) {
          console.log(res)
          inquirer.prompt([{
            name: "choice",
            type: "rawlist",
            choices: function (value) {
              var choiceArray = [];
              for (var i = 0; i < res.length; i++) {
                choiceArray.push(res[i].product_name);
              }
              return choiceArray;
            },
            message: "what product would you like?",

          },{
            name:"inventory",
            type:"input",
            message:"How much do you wanna buy?",
            validate: function(value) {
              if (isNaN(value) === false) {
                return true;
              }
              return false;
            }
          }]) 
          .then(function (answer) {
            console.log(answer.choice);
            console.log(answer.inventory);
            console.log(res);
          })
        })
      }



    
        // -how many units of the product they would like to buy
        // Check if store has enough of the product to the customer's request
        // log phrase "INSUFFICIENT QUANTITY!"

        // if store has enough updated remaining quantity
        // -update goes through show customer the total cost of their purchase