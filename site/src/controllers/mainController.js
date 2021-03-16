const jsonTable = require("../database/jsonTable");
const productsTable = jsonTable("products");
const shuffle = require("lodash.shuffle");
const db = require('../../../database/models') 

module.exports = {
  index: (req, res) => {
    
    // db.Products.findAll()
    // .then((products)=> shuffle(products))
    // .then((mezclados)=>{
    //   res.render("home", {products: mezclados});
    // })
    // .catch((error)=>{
    //   console.log(error)
    // })
    
    let products = shuffle(productsTable.all());
    //let revueltos = shuffle(products)
    res.render("home", {products});
  },
};
