const shuffle = require("lodash.shuffle");
const db = require("../../../database/models");
const { sequelize } = require("../../../database/models");

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
    let products = await db.Product.findAll({
      limit: 8,
      order: [[sequelize.literal("price"), "DESC"]],
    });
    res.render("home", { categories, products });
  },
  faqs: (req, res) => {
    res.render("faqs");
  },
  carroPdf: (req, res) => {
    res.render("carroPdf");
  },
};
