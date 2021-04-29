const db = require("../../../../database/models");
const { Op } = require("sequelize");

module.exports = {
  list: async (req, res) => {
    try {
      const products = await db.Product.findAll();

      if (products.length > 0) {
        return res.status(200).json({
          total: products.length,
          data: products,
          status: 200,
        });
      } else {
        res
          .json({
            mensaje: "No se encontraron productos en la DB.",
            status: 400,
          })
          .status(400);
      }
    } catch (error) {
      res
        .json({
          mensaje: "No se encontraron productos en la DB.",
          status: 400,
          error: error,
        })
        .status(400);
    }
  },
  show: async (req, res) => {
    try {
      let product = await db.Product.findByPk(req.params.id);
      if (product) {
        return res.status(200).json({
          data: product,
          status: 200,
        });
      } else {
        return res.status(400).json({
          mensaje: "No se encontro el producto en la DB. ",
          status: 400,
          errror: error,
        });
      }
    } catch (error) {
      res
        .json({
          mensaje: "No se encontro el producto en la DB. ",
          status: 400,
          error: error,
        })
        .status(400);
    }
  },
  store: async (req, res) => {
    try {
      const product = await db.Product.create(req.body);
      console.log("Valor product: ", product);
      if (product) {
        return res
          .status(200)
          .json({ data: product, status: 200, created: "ok" });
      } else {
        return res.status(400).json({
          status: 400,
          created: "No se pudo crear el producto",
        });
      }
    } catch (error) {
      return res.status(400).json({
        status: 400,
        created: "No se pudo crear el producto",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const product = await db.Product.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (product) {
        return res.status(200).json({
          data: product,
          status: 200,
          mensaje: "Producto eliminado",
        });
      }
    } catch {
      (error) => res.json(error);
    }
  },
};
