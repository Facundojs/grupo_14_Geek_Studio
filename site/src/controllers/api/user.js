const db = require("../../../../database/models");
const { Op } = require("sequelize");
class us{
  constructor(id, nombre, apellido, email, telefono, pais, tipoDeUsuario) {
    this.id = id,
    this.nombre_completo = `${nombre} ${apellido}`,
    this.email = email,
    this.telefono = telefono,
    this.pais = pais,
    this.tipoDeUsuario = tipoDeUsuario
  }
}
module.exports = {
  list: async (req, res) => {
    try {
      const users = await db.User.findAll();

      if (users.length > 0) {
        return res.status(200).json({
          total: users.length,
          data: users,
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
      user = await db.User.findByPk(req.params.id);
      if (user) {
        return res.status(200).json({
          data: user,
          status: 200,
        });
      } else {
        return res.status(400).json({
          mensaje: "No se encontro el usuario en la DB. ",
          status: 400,
          errror: error,
        });
      }
    } catch (error) {
      res
        .json({
          mensaje: "No se encontro el usuario en la DB. ",
          status: 400,
          error: error,
        })
        .status(400);
    }
  },
  dashboardList: async (req, res) => {
    try {
      const users = await db.User.findAll({include: 'user_type'});
      const finalUsers = users.map((elemento) => {
        return new us(elemento.id,
          elemento.first_name,
          elemento.last_name,
          elemento.email,
          elemento.telephone,
          elemento.country,
          elemento.user_type.type_name)
      })
      // id, nombre, apellido, email, telefono, pais, tipoDeUsuario
      if (users.length > 0) {
        return res.status(200).json({
          total: users.length,
          data: finalUsers,
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
  store: async (req, res) => {
    try {
      const user = await db.User.create(req.body);
      console.log("Valor user: ", user);
      if (user) {
        return res.status(200).json({ data: user, status: 200, created: "ok" });
      } else {
        return res.status(400).json({
          status: 400,
          created: "No se pudo crear el usuario",
        });
      }
    } catch (error) {
      return res.status(400).json({
        status: 400,
        created: "No se pudo crear el usuario",
        error: error,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const user = await db.User.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (user) {
        return res.status(200).json({
          data: user,
          status: 200,
          mensaje: "Usuario eliminado",
        });
      }
    } catch {
      (error) => res.json(error);
    }
  },

  search: (req, res) => {
    const users = db.User.findAll({
      where: {
        first_name: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    }).then((users) => {
      if (users.length > 0) {
        return res.status(200).json(users);
      }

      return res.status(200).json("No se encontraron coincidencias");
    });
  },
};
