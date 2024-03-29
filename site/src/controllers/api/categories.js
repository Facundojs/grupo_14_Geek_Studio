const db = require("../../../../database/models");
const { Op } = require("sequelize");
class cat{
    constructor(id, nombre, cantidadProductos) {
        this.id = id,
        this.nombre = nombre,
        this.cantidadDeProductos = cantidadProductos
    }
}
module.exports = {
    list: async (req, res) => {
        try {
            const categories = await db.Category.findAll();

            if (categories.length > 0) {
                return res.status(200).json({
                    total: categories.length,
                    data: categories,
                    status: 200,
                });
            } else {
                res
                    .json({
                        mensaje: "No se encontraron usuarios en la DB.",
                        status: 400,
                    })
                    .status(400);
            }
        } catch (error) {
            res
                .json({
                    mensaje: "No se encontraron usuarios en la DB.",
                    status: 400,
                    error: error,
                })
                .status(400);
        }
    },
    show: async (req, res) => {
        try {
            category = await db.Category.findByPk(req.params.id);
            if (category) {
                return res.status(200).json({
                    data: category,
                    status: 200,
                });
            } else {
                return res.status(400).json({
                    mensaje: "No se encontro la categoría en la DB. ",
                    status: 400,
                    errror: error,
                });
            }
        } catch (error) {
            res
                .json({
                    mensaje: "No se encontro la categoría en la DB.",
                    status: 400,
                    error: error,
                })
                .status(400);
        }
    },
    dashboardList: async (req, res) => {
        try {
            const categories = await db.Category.findAll({include:'products'});
            const finalCatList = categories.map((elemento) => {
                return new cat(elemento.id, elemento.name, elemento.products.length)
            })
            //nombre, cantidadProductos, productos
            if (categories.length > 0) {
                return res.status(200).json({
                    total: categories.length,
                    data: finalCatList,
                    status: 200,
                });
            } else {
                res
                    .json({
                        mensaje: "No se encontraron usuarios en la DB.",
                        status: 400,
                    })
                    .status(400);
            }
        } catch (error) {
            res
                .json({
                    mensaje: "No se encontraron usuarios en la DB.",
                    status: 400,
                    error: error,
                })
                .status(400);
        }
    }
}