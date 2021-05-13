// const fs = require("fs");
// const path = require("path");
// const User = require("../models/User");
// const { localsName } = require("ejs");

const fetch = require("node-fetch");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../../database/models");

module.exports = {
  index: async (req, res) => {
    let users = await db.User.findAll({
      include: "user_type",
      order: ["user_type_id"],
    });

    res.render("users/index", { users });
  },
  login: (req, res) => {
    res.render("users/login");
  },
  loginProcess: (req, res) => {
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((userToLogin) => {
        if (userToLogin) {
          let okPassword = bcryptjs.compareSync(
            req.body.password,
            userToLogin.password
          );

          if (okPassword) {
            req.session.userLogged = userToLogin;
            delete userToLogin.password; //por seguridad borro esta propiedad

            if (req.body.remember) {
              res.cookie("mailDeUsuario", req.body.email, {
                maxAge: 60 * 1000 * 60 * 10,
              });
            }
            //
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
        } else {
          //////////////
          return res.render("users/login", {
            errors: {
              email: {
                msg: "No se encontró el mail",
              },
            },
            oldData: req.body,
          });
        } ///////////////
      })
      .catch((error) => {
        res.send("No existe el user");
        console.log("ERROR CATCHED ", error);
      });
  },
  profile: (req, res) => {
    res.render("users/profile", { user: req.session.userLogged });
  },
  create: async (req, res) => {
    try {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const countries = await response.json();

      const nameCountries = [];

      countries.forEach((country) => {
        nameCountries.push(country.name);
      });

      res.render("users/create", { countries: nameCountries });
    } catch (err) {
      res.send(err);
    }
  },
  processRegister: async (req, res) => {
    let resultValidation = validationResult(req);
    console.log(resultValidation);
    ////////////////////////
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await response.json();
    const nameCountries = [];
    countries.forEach((country) => {
      nameCountries.push(country.name);
    });
    ///////////////////////
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
        countries: nameCountries,
      });
    }
    if (resultValidation.errors.length > 0) {
      return res.render("users/create", {
        errors: resultValidation.mapped(),
        oldData: req.body,
        countries: nameCountries,
      });
    }
    const {
      first_name,
      last_name,
      email,
      telephone,
      country,
    } = req.body;
    db.User.create({
      first_name,
      last_name,
      password: bcryptjs.hashSync(req.body.password, 10),
      email,
      telephone,
      avatar: req.file ? req.file.filename : "default.jpg",
      country,
      user_type_id: 2,
    });

    let users = await db.User.findOne({
      where: { email: req.body.email },
    });

    res.redirect("/users/login");
  },
  destroy: (req, res) => {
    let userDelete = parseInt(req.params.id);
    db.User.destroy({
      where: { id: userDelete },
    }).then(() => {
      if (req.session.userLogged.id != userDelete) {
        res.redirect("/users/index");
      } else {
        res.clearCookie("mailDeUsuario");
        res.redirect("/users/logout");
      }
    });
  },
  show: async (req, res) => {
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
    try {
      let updatedUser = await db.User.findOne({
        where: {
          id: req.params.id,
        },
      });

      const hidePassword = updatedUser.dataValues.id != req.session.userLogged.id;
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const countries = await response.json();
      const nameCountries = [];
      countries.forEach((country) => {
        nameCountries.push(country.name);
      });
      res.render("users/edit", {
        user: updatedUser,
        countries: nameCountries,
        hidePassword,
      });
    } catch (err) {
      res.send(err);
    }
    res.render("users/edit", { user: updatedUser });
  },
  update: async (req, res) => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await response.json();
    const nameCountries = [];
    countries.forEach((country) => {
      nameCountries.push(country.name);
    });
    let resultValidation = validationResult(req);
    console.log(resultValidation)
    
    if (resultValidation.errors.length > 0) {
      let updatedUser = await db.User.findOne({
        where: {
          id: req.params.id,
        },
      });
      const hidePassword = updatedUser.dataValues.id != req.session.userLogged.id;
      return res.render("users/edit", {
        user: updatedUser,
        errors: resultValidation.mapped(),
        oldData: req.body,
        countries: nameCountries,
        hidePassword,
      });
    }

    const { id } = req.params;
    const { first_name, last_name, email, telephone, country } = req.body;

    let userToEdit = await db.User.findOne({ where: { id: id } });
    let userCategoryId = parseInt(userToEdit.dataValues.user_type_id);
    await db.User.update(
      {
        user_type_id: userCategoryId,
        first_name,
        last_name,
        //password: bcryptjs.hashSync(req.body.password, 10), La pass no se cambia desde ahí
        email,
        telephone,
        country,
        avatar: req.file ? req.file.filename : "default.jpg",
      },
      {
        where: { id: id },
      }
    );

    if (req.session.userLogged.id != userToEdit.dataValues.id) {
      //Si el que lo modifico es el admin solo lo redirecciono
      res.redirect("/users/index");
    } else {
      //Si el que lo modifico fue el propio user actualizo
      res.locals.userLogged = {
        id,
        first_name,
        last_name,
        password: bcryptjs.hashSync(req.body.password, 10),
        email,
        telephone,
        country,
        avatar: req.file ? req.file.filename : "default.jpg",
        user_type_id: userCategoryId,
      };
      req.session.userLogged = {
        id,
        first_name,
        last_name,
        password: bcryptjs.hashSync(req.body.password, 10),
        email,
        telephone,
        country,
        avatar: req.file ? req.file.filename : "default.jpg",
        user_type_id: userCategoryId,
      };
      res.redirect("/users/profile");
    }
  },
  recoverPass: (req, res) => {
    res.render("users/recover-pass");
  },
  logout: (req, res) => {
    //Borro la sesion
    res.clearCookie("mailDeUsuario");
    req.session.destroy();
    return res.redirect("/");
  },
};
