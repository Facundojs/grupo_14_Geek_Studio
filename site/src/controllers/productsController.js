const jsonTable = require("../database/jsonTable");
//const model = require('../database/jsonTable');
const productsTable = jsonTable("products");
const { validationResult } = require("express-validator");
const db = require("../../../database/models");

// const { Product, Category } = require('../database/models')

module.exports = {
  index: async (req, res) => {
    let products = await db.Product.findAll();
    let categories = await db.Category.findAll();
    console.log("PRO ", products);

    res.render("products", { products, categories });
  },
  create: (req, res) => {
    db.Category.findAll().then((categories) => {
      res.render("products/create", { categories });
    });
  },
  store: (req, res) => {
    // Crea producto por post
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let producto = req.body;
      if (req.file) {
        producto.image = req.file.filename;
      }

      const { name, price, discount, features } = req.body;

      db.Product.create({
        name,
        price,
        discount,
        features,
        image: producto.image,
        category_id: parseInt(req.body.category),
      })
        .then((product) => {
          console.log(product.id);
          return res.redirect(`/productos/${product.id}`);
        })
        .catch((errors) => {
          console.log(errors);
        });
      // Si hay errores
    } else {
      // Renderizo el formulario nuevamente con los errors y los datos completados
      return res.render("products/create", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }
    //console.table(product); //para ver que se creo por consola
  },
  show: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then((product) => {
        if (product) {
          res.render("products/detail", { product });
        } else {
          res.send("No se encontró el producto");
        }
      })
      .catch((error) => {
        console.log(error);
        res.send("Ha ocurrido un error");
      });
  },
  edit: (req, res) => {
    db.Product.findByPk(req.params.id).then((product) => {
      if (product) {
        db.Category.findAll()
          .then((categories) => {
            console.log(categories, product);
            res.render("products/edit", { categories, productToEdit: product });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  },
  update: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let producto = req.body;
      if (req.file) {
        producto.image = req.file.filename;
      }

      const { id } = req.params;
      const { name, price, discount, features, category_id } = req.body;
      db.Product.findByPk(id).then((product) => {
        const originalImage = product.image;

        db.Product.update(
          {
            name,
            price,
            discount,
            features,
            category_id,
            image: req.file ? req.file.filename : originalImage,
          },
          {
            where: {
              id,
            },
          }
        ).then(() => {
          res.redirect(`/productos/${id}`);
        });
      });

      // let product = req.body;
      // product.id = Number(req.params.id);

      // // Si viene una imagen nueva la guardo
      // if (req.file) {
      //   product.image = req.file.filename;
      //   // Si no viene una imagen nueva, busco en base la que ya había
      // } else {
      //   db.Product.findByPk(product.id)
      //     .then(productOld => {

      //     })
      //   product.image = oldProduct.image;
      //   console.log(oldProduct)
      // }

      // let productId = productsTable.update(product);

      // res.redirect("/productos/" + productId);
    } else {
      // Renderizo el formulario nuevamente con los errors y los datos completados
      return res.render("products/create", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },
  destroy: (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.redirect("/productos");
    });
  },
  chart: (req, res) => {
    db.Product.findAll()
      .then(() => {
        res.render("carro", { productos: products });
      })
      .catch((error) => {
        console.log(error);
        res.send("Ha ocurrido un error");
      });
  },
};
