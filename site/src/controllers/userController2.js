// const fs = require("fs");
// const path = require("path");
// const User = require("../models/User");
const fetch = require('node-fetch');
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../../database/models");
const { localsName } = require("ejs");

module.exports = {
  index: async (req, res) => {
    //let users = User.findAll();
    //res.render("users/index", { users });
    let users = await db.User.findAll();

    //console.clear();
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
                maxAge: 60 * 1000 * 60,
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
    //console.log(req.cookies.mailDeUsuario);
    res.render("users/profile", { user: req.session.userLogged });
  },
  create: (req, res) => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((respuesta) => {
        respuesta.json()
      })
      .then((countries) => {
        console.log(countries);
        res.render("users/create", {countries});
      })
  },
  processRegister: async (req, res) => {
    let resultValidation = validationResult(req);
    console.log(resultValidation);
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
      user_type_id: 2,
    });

    let users = await db.User.findOne({
      where: { email: req.body.email },
    });

    res.redirect("/users/login");
  },
  destroy: (req, res) => {
    let userDelete = par(req.params.id);
    db.User.destroy({
      where: { id: userDelete },
    }).then(() => {
      console.log(req.session.userLogged);
      if (req.session.userLogged.id != userDelete) {
        res.redirect('/users/index')
      } else {
        res.redirect('/users/logout')
        res.clearCookie("mailDeUsuario");
      }
    })

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
    const { id } = req.params;
    const {
      first_name,
      last_name,
      email,
      telephone,
      country,
    } = req.body;

    let userToEdit = await db.User.findOne({ where: { id: id } });
    let userCategoryId = parseInt(userToEdit.dataValues.user_type_id )
    console.log(req.body);
    await db.User.update(
      {
        user_type_id: userCategoryId,
        first_name,
        last_name,
        password: bcryptjs.hashSync(req.body.password, 10),
        email,
        telephone,
        country,
        avatar: req.file.filename,
      },
      {
        where: { id: id },
      }
      
    );
    
    res.locals.userLogged = {
        id,
        first_name,
        last_name,
        password: bcryptjs.hashSync(req.body.password, 10),
        email,
        telephone,
        country,
        avatar: req.file.filename,
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
        avatar: req.file.filename,
        user_type_id: userCategoryId,        
      };
    //Reemplazar locals y session
      res.redirect("/users/profile")
    
  },
  recoverPass: (req, res) => {
    res.render("users/recover-pass");
  },
  logout: (req, res) => {
    //Borro la sesion
    console.log("¡CHAU!");
    res.clearCookie("mailDeUsuario");
    // console.log('Cookie limpiada!');
    req.session.destroy();
    return res.redirect("/");
  },
};
