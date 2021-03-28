const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const db = require("../../../database/models");

module.exports = {
  index: async (req, res) => {
    //let users = User.findAll();
    //res.render("users/index", { users });
    let users = await db.User.findAll();

    console.clear();
    console.log(users);

    res.render("users/index", { users });

    // DB.Genre.findAll().then((genres) => {
    //   return res.status(200).json({
    //     total: genres.length,
    //     data: genres,
    //     status: 200,
    //   });
    // });
  },
  login: (req, res) => {
    res.render("users/login");
  },
  loginProcess: (req, res) => {
    //let userToLogin = db.User.findField("email", req.body.email);
    //KBE
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((userToLogin) => {
        console.log("USER -->", userToLogin);
        if (userToLogin) {
          //console.log("muestro usuario x consola: ", user);
          let okPassword = bcryptjs.compareSync(
            req.body.password,
            userToLogin.password
          );
          //console.log("OKPASS: ", okPassword);

          if (okPassword) {
            req.session.userLogged = userToLogin;
            delete userToLogin.password; //por seguridad borro esta propiedad

            return res.redirect("/users/profile");
          }
          return res.render("users/login", {
            errors: {
              password: {
                msg: "La contraseña es incorrecta",
              },
            },
            oldData: req.body,
          });
        }
        //res.render("users/login", { error: "Usuario no encontrado" });
      })
      .catch((error) => {
        console.log("ERROR CATCH ", error);
      });
  },
  profile: (req, res) => {
    res.render("users/profile", { user: req.session.userLogged });
  },
  create: (req, res) => {
    res.render("users/create");
  },
  processRegister: async (req, res) => {
    const resultValidation = validationResult(req);

    let userInDB = await db.User.findOne({
      where: { email: req.body.email },
    });

    if (userInDB) {
      return res.render("users/create", {
        errors: {
          email: {
            msg: "Este email ya está registrado",
          },
        },
        oldData: req.body,
      });
    }

    if (resultValidation.errors.length > 0) {
      return res.render("users/create", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    const {
      first_name,
      last_name,
      password,
      email,
      telephone,
      country,
      user_type_id,
    } = req.body;

    db.User.create({
      first_name,
      last_name,
      password: bcryptjs.hashSync(req.body.password, 10),
      email,
      telephone,
      avatar: req.file.filename,
      country,
      user_type_id: 1,
    });

    let users = await db.User.findOne({
      where: { email: req.body.email },
    });

    res.redirect("/users/login");
  },
  destroy: async (req, res) => {
    let userDelete = req.params.id;
    console.log("ID A ELIMINAR: ", userDelete);

    await db.User.destroy({
      where: { id: userDelete },
    });

    res.redirect("/users/index");
  },
  show: async (req, res) => {
    //busco el usuario en el json
    //let user = await db.User.findOne(req.params.id);
    let user = await db.User.findOne({
      where: { email: req.body.email },
    });

    res.render("users/edit", { user });
    //mi ruta para ejecutar seria: http://localhost:3000/users/1

    if (user) {
      res.send(req.body);
    } else {
      res.send("No encontre el usuario");
    }
  },
  edit: async (req, res) => {
    let userUpdate = req.params.id;

    let updatedUser = await db.User.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.render("users/edit", { user: updatedUser });
  },
  update: async (req, res) => {
    //KBE Tengo que incluir validaciones aca Y en el ejs
    // const resultValidation = validationResult(req);
    // if (resultValidation.errors.length > 0) {
    //   return res.render("users/edit", {
    //     errors: resultValidation.mapped(),
    //     oldData: req.body,
    //   });
    // }
    console.log("REQ", req.params.id);

    const { id } = req.params;
    const {
      first_name,
      last_name,
      password,
      email,
      telephone,
      country,
    } = req.body;

    await db.User.update(
      {
        first_name,
        last_name,
        password,
        email,
        telephone,
        country,
      },
      {
        where: { id: id },
      }
    );

    res.redirect("/users/profile");
  },
  recoverPass: (req, res) => {
    res.render("users/recover-pass");
  },
  logout: (req, res) => {
    //Borro la sesion
    req.session.destroy();
    return res.redirect("/");
  },
};
