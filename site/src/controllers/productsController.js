const { validationResult } = require("express-validator");
const db = require("../../../database/models");
const { sequelize } = require("../../../database/models");

// const { Product, Category } = require('../database/models')

module.exports = {
  index: async (req, res) => {
    let products = await db.Product.findAll({ include: "category" });
    let categories = await db.Category.findAll({ include: "products" });

    res.render("products", { products, categories });
  },
  create: async (req, res) => {
    let categories = await db.Category.findAll();
    res.render("products/create", { categories });
  },
  store: async (req, res) => {
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
      let categories = await db.Category.findAll();
      return res.render("products/create", {
        errors: errors.mapped(),
        oldData: req.body,
        categories,
      });
    }
    //console.table(product); //para ver que se creo por consola
  },
  favorite: (req, res) => {
    res.render("products/favourites");
  },
  show: async (req, res) => {
    let categories = await db.Category.findAll();
    let products = await db.Product.findAll({
      limit: 4,
      order: [[sequelize.literal("price"), "DESC"]],
    });

    db.Product.findByPk(req.params.id)
      .then((product) => {
        if (product) {
          res.render("products/detail", { product, products, categories });
        } else {
          res.status(400);
          res.render("badRequest");
        }
      })
      .catch((error) => {
        res.status(400);
        res.render("badRequest");
      });
  },
  edit: async (req, res) => {
    let productToEdit = await db.Product.findByPk(req.params.id);
    if (productToEdit != undefined) {
      let categories = await db.Category.findAll();
      res.render("products/edit", { categories, productToEdit });
    } else {
      res.status(400);
      res.render("badRequest");
    }
  },
  update: async (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let producto = req.body;
      if (req.file) {
        producto.image = req.file.filename;
      }
      const { id } = req.params;
      const { name, price, discount, features } = req.body;
      db.Product.findByPk(id).then((product) => {
        const originalImage = product.image;
        db.Product.update(
          {
            name,
            price,
            discount,
            features,
            category_id: parseInt(req.body.category),
            image: req.file.filename,
          },
          {
            where: { id },
          }
        ).then(() => {
          res.redirect(`/productos/${id}`);
        });
      });
    } else {
      // Renderizo el formulario nuevamente con los errors y los datos completados
      let categories = await db.Category.findAll();
      let productToEdit = await db.Product.findByPk(req.params.id);
      return res.render("products/edit", {
        errors: errors.mapped(),
        old: req.body,
        categories,
        productToEdit,
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
      .then((productos) => {
        res.render("carro", { productos });
      })
      .catch((error) => {
        console.log(error);
        res.send("Ha ocurrido un error");
      });
  },

  productsSearched: (req, res) => {
    res.render("products/search");
  },
};
