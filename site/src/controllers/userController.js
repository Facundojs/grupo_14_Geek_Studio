const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    let users = User.findAll();
    res.render("users/index", { users });
  },
  login: (req, res) => {
    res.render("users/login");
  },
  loginProcess: (req, res) => {
    let userToLogin = User.findField("email", req.body.email);
    if (userToLogin) {
      let okPassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
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

    return res.render("users/login", {
      errors: {
        email: {
          msg: "El email no se encuentra registrado en nuestra base de datos",
        },
      },
      oldData: req.body,
    });
  },
  profile: (req, res) => {
    res.render("users/profile", { user: req.session.userLogged });
  },
  create: (req, res) => {
    res.render("users/create");
  },
  processRegister: (req, res) => {
    const resultValidation = validationResult(req);

    let userInDB = User.findField("email", req.body.email);

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

    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      userImg: req.file.filename,
    };

    let userCreated = User.create(userToCreate);
    users = User.findAll();
    //res.redirect('users/index/', {users} );
    res.redirect("/users/login");
  },
  destroy: (req, res) => {
    let userDelete = req.params.id;
    //console.log(userDelete);
    User.delete(userDelete);
    res.redirect("/users/index");
  },
  show: (req, res) => {
    //busco el usuario en el json
    let user = User.findByPk(req.params.id);
    res.render("users/edit", { user });
    //mi ruta para ejecutar seria: http://localhost:3000/users/1
    if (user) {
      res.send(req.body);
    } else {
      res.send("No encontre el usuario");
    }
  },
  edit: (req, res) => {
    let updatedUser = User.findByPk(req.params.id);
    res.render("users/edit", { user: updatedUser });
  },
  update: (req, res) => {
    let updatedUser = req.body; //tomo el usuario que viene del form
    updatedUser.id = req.params.id;
    //Actualizo el array encontrado
    let updatedUsers = users.map((user) => {
      if (user.id == req.params.id) {
        return updatedUser;
      } else {
        return user;
      }
    });

    //Grabo json
    let userJson = JSON.stringify(updatedUsers, null, " ");
    fs.writeFileSync(path.join(__dirname, "../database/users.json"), userJson);

    res.redirect("/users/index");
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
