const jsonTable = require("../database/jsonTable");
// const productsTable = jsonTable("products");
const shuffle = require("lodash.shuffle");
const db = require('../../../database/models') 

module.exports = {
  index: async (req, res) => {
    
    // db.Products.findAll()
    // .then((products)=> shuffle(products))
    // .then((mezclados)=>{
    //   res.render("home", {products: mezclados});
    // })
    // .catch((error)=>{
    //   console.log(error)
    // })
    let categories = await db.Category.findAll();
    let products = await db.Product.findAll();

      res.render("home", { categories, products })

  },
};
