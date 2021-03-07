let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const jsonTable = require("../database/jsonTable");
const productsTable = jsonTable("products");
const shuffle = require('lodash.shuffle');
shuffle(array)
console.log(array);
